export class LoginPage {
  constructor(page) {
    this.page = page;

    this.usernameInput = page.locator(
      'input[name="username"], input[id="username"], input[placeholder*="Username" i], input[type="text"]'
    );

    this.passwordInput = page.locator(
      'input[name="password"], input[id="password"], input[placeholder*="Password" i], input[type="password"]'
    );

    this.loginButton = page.locator(
      'button[type="submit"], input[type="submit"], button:has-text("Login"), button:has-text("Sign In"), button:has-text("Log In")'
    );
  }

  async open() {
    await this.page.goto('/');
    await this.page.waitForLoadState('domcontentloaded');
  }

  async enterUsername(username) {
    await this.usernameInput.first().fill(username);
  }

  async enterPassword(password) {
    await this.passwordInput.first().fill(password);
  }

  async clickLogin() {
    await this.loginButton.first().click();
  }

  async login(username, password) {
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.clickLogin();
  }
}