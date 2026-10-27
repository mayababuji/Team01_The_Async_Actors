pipeline {
    agent any

    parameters {
        choice(
            name: 'TEST_ENV',
            choices: ['local', 'qa', 'prod'],
            description: 'Select the environment to test'
        )
    }

    tools {
        nodejs 'NodeJS-20'
    }

    environment {
        CI = 'true'
        TEST_ENV = "${params.TEST_ENV}"
        PLAYWRIGHT_BROWSERS_PATH = "${WORKSPACE}/.playwright-browsers"
    }

    options {
        timestamps()
        disableConcurrentBuilds()
    }

    stages {
        stage('Set environment') {
            steps {
                script {
                    def urls = [
                        local: 'https://suite8demo.suiteondemand.com',
                        qa   : 'https://suite8demo.suiteondemand.com',
                        prod : 'https://suite8demo.suiteondemand.com'
                    ]

                    if (!urls.containsKey(params.TEST_ENV)) {
                        error(
                            "Unsupported TEST_ENV: ${params.TEST_ENV}"
                        )
                    }

                    env.BASE_URL = urls[params.TEST_ENV]
                }

                echo "Running tests against environment: ${params.TEST_ENV}"
                echo "Base URL: ${env.BASE_URL}"
            }
        }

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Clean previous test artifacts') {
            steps {
                sh '''
                    rm -rf \
                        allure-results \
                        allure-report \
                        playwright-report \
                        test-results \
                        tests/generated

                    mkdir -p allure-results
                '''
            }
        }

        stage('Environment') {
            steps {
                sh '''
                    node --version
                    npm --version
                    echo "TEST_ENV=$TEST_ENV"
                    echo "BASE_URL=$BASE_URL"
                    echo "CI=$CI"
                '''
            }
        }

        stage('Install dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Install Playwright browsers') {
            steps {
                sh '''
                    npx playwright install --with-deps \
                        chromium \
                        firefox \
                        webkit
                '''
            }
        }

        stage('Generate BDD tests') {
            steps {
                withCredentials([
                    usernamePassword(
                        credentialsId: 'suite8-login',
                        usernameVariable: 'LOGIN_USERNAME',
                        passwordVariable: 'LOGIN_PASSWORD'
                    )
                ]) {
                    sh '''
                        set +x

                        npx bddgen
                    '''
                }
            }
        }

        stage('Run all BDD tests') {
            steps {
                withCredentials([
                    usernamePassword(
                        credentialsId: 'suite8-login',
                        usernameVariable: 'LOGIN_USERNAME',
                        passwordVariable: 'LOGIN_PASSWORD'
                    )
                ]) {
                    sh '''
                        set +x

                        npx playwright test \
                            --shuffle \
                            --project=login-chromium \
                            --project=login-firefox \
                            --project=login-webkit \
                            --project=chromium \
                            --project=firefox \
                            --project=webkit
                    '''
                }
            }
        }
    }

    post {
        always {
            // Archive first so Allure publication errors do not
            // prevent preservation of existing test artifacts.
            archiveArtifacts(
                artifacts: 'playwright-report/**,test-results/**,allure-results/**',
                allowEmptyArchive: true,
                fingerprint: true
            )

            script {
                def perfettoGzipExists =
                    fileExists('test-results/perfetto.json.gz')

                def perfettoJsonExists =
                    fileExists('test-results/perfetto.json')

                if (perfettoGzipExists || perfettoJsonExists) {
                    echo(
                        'Perfetto timeline generated. Download it from ' +
                        'Build Artifacts under test-results and open ' +
                        'it in Perfetto UI.'
                    )
                } else {
                    echo(
                        'No Perfetto timeline was found. Confirm that ' +
                        'playwright.config.js includes the perfetto ' +
                        'reporter with outputFile set to ' +
                        'test-results/perfetto.json.gz.'
                    )
                }
            }

            script {
                def nodeVersion = sh(
                    script: 'node --version',
                    returnStdout: true
                ).trim()

                def osName = sh(
                    script: 'uname -s',
                    returnStdout: true
                ).trim()

                def headlessValue =
                    env.HEADLESS ?: 'true'

                def ciValue =
                    env.CI ?: 'true'

                def testEnvValue =
                    env.TEST_ENV ?: params.TEST_ENV ?: 'unknown'

                def baseUrlValue =
                    env.BASE_URL ?: 'unknown'

                sh """
                    mkdir -p allure-results

                    cat > allure-results/environment.properties << 'EOF'
Test Environment=${testEnvValue}
Base URL=${baseUrlValue}
Browser Projects=chromium, firefox, webkit
Node Version=${nodeVersion}
Operating System=${osName}
Headless Mode=${headlessValue}
CI=${ciValue}
EOF
                """

                // Archive the environment file created after
                // the initial artifact archival.
                archiveArtifacts(
                    artifacts: 'allure-results/environment.properties',
                    allowEmptyArchive: true,
                    fingerprint: true
                )

                def allureResultsExist =
                    fileExists('allure-results')

                def allureTestResultsExist =
                    allureResultsExist && (
                        sh(
                            script: '''
                                find allure-results \
                                    -maxdepth 1 \
                                    -type f \
                                    -name "*-result.json" \
                                    | grep -q .
                            ''',
                            returnStatus: true
                        ) == 0
                    )

                if (allureTestResultsExist) {
                    allure([
                        results: [
                            [path: 'allure-results']
                        ],
                        reportBuildPolicy: 'ALWAYS'
                    ])
                } else {
                    echo(
                        'No Allure test result JSON files were ' +
                        'produced; skipping Allure publication.'
                    )
                }
            }

            publishHTML([
                allowMissing: true,
                alwaysLinkToLastBuild: true,
                keepAll: true,
                reportDir: 'playwright-report',
                reportFiles: 'index.html',
                reportName: 'Playwright HTML Report',
                reportTitles: 'Playwright Test Results'
            ])
        }

        success {
            echo(
                "All Playwright BDD tests passed in ${params.TEST_ENV}."
            )
        }

        failure {
            echo(
                'The pipeline failed. Check the stage logs and ' +
                "test reports for ${params.TEST_ENV}."
            )
        }

        cleanup {
            cleanWs(
                deleteDirs: true,
                disableDeferredWipeout: true,
                notFailBuild: true
            )
        }
    }
}