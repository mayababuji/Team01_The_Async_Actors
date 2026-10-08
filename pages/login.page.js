export class LoginPage {
  constructor(page) {
    this.page = page;

      this.usernameInput = page.getByRole(
      'textbox', { name: /username/i }
    );

    // this.usernameInput = page.locator('input[name="username"]');

    
      this.passwordInput = page.getByRole(
      'textbox', { name: /password/i }
    );

  
     this.loginButton = page.getByRole(
      'button', { name: /log in/i }
    );
    this.loginErrorMessage = page.getByText('Login credentials incorrect, please try again.');
    this.emptyCredentialErrorMessage = page.getByText(' Missing required field ' );
  }


  async open() {
    await this.page.goto('/');
    await this.page.waitForLoadState('domcontentloaded');
  }

  async enterUsername(username) {
  //   const snapshot = await this.page.locator('body').ariaSnapshot();

  // console.log(snapshot);
    await this.usernameInput.fill(username);
  }

  async enterPassword(password) {
    await this.passwordInput.fill(password);
  }

  async clickLogin() {
     
    await this.loginButton.click();
  //     const snapshot = await this.page.locator('body').ariaSnapshot();

  // console.log(snapshot);

  }

  async login(username, password) {
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.clickLogin();
  }
}