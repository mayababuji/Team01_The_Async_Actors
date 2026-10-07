export class LoginPage {
  constructor(page) {
    this.page = page;

   

      this.usernameInput = page.getByRole(
      'textbox', { name: /username/i }
    );

    
      this.passwordInput = page.getByRole(
      'textbox', { name: /password/i }
    );

  
     this.loginButton = page.getByRole(
      'button', { name: /log in/i }
    );
  }


  async open() {
    await this.page.goto('/');
    await this.page.waitForLoadState('domcontentloaded');
  }

  async enterUsername(username) {
  //   const snapshot = await this.page.locator('body').ariaSnapshot();

  // console.log(snapshot);
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