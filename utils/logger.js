import winston from 'winston';
import path from 'node:path';
import { mkdirSync } from 'node:fs';

const { combine, timestamp, printf, colorize, errors } = winston.format;

const logDirectory = path.resolve(process.cwd(), 'logs');

mkdirSync(logDirectory, {
  recursive: true
});

const consoleFormat = combine(
  colorize(),
  timestamp({
    format: 'YYYY-MM-DD HH:mm:ss'
  }),
  errors({
    stack: true
  }),
  printf(({ timestamp, level, message, ...metadata }) => {
    const details = Object.keys(metadata).length
      ? ` ${JSON.stringify(metadata)}`
      : '';

    return `${timestamp} ${level}: ${message}${details}`;
  })
);

const fileFormat = combine(
  timestamp(),
  errors({
    stack: true
  }),
  winston.format.json()
);

export function createLogger(testInfo) {
  const safeProjectName = testInfo.project.name.replace(
    /[^a-zA-Z0-9_-]/g,
    '_'
  );

  const safeTitle = testInfo.title.replace(
    /[^a-zA-Z0-9_-]/g,
    '_'
  );

  const logFileName = `${safeProjectName}-${safeTitle}-retry-${testInfo.retry}.log`;

  const logPath = path.join(logDirectory, logFileName);

  const logger = winston.createLogger({
    level: process.env.LOG_LEVEL || 'info',
    defaultMeta: {
      environment: process.env.TEST_ENV || 'local',
      browser: testInfo.project.name,
      retry: testInfo.retry,
      testTitle: testInfo.title
    },
    transports: [
      new winston.transports.Console({
        format: consoleFormat
      }),
      new winston.transports.File({
        filename: logPath,
        format: fileFormat
      })
    ]
  });

  return {
    logger,
    logPath
  };
}