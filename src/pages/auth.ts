import { expect, Locator, Page } from "@playwright/test";
import BasePage from "./base";

export default class AuthPage extends BasePage {
  // Login tab
  private readonly loginEmailInput: Locator;
  private readonly loginEmailErr: Locator;
  private readonly loginPwdInput: Locator;
  private readonly loginTab: Locator;
  private readonly loginBtn: Locator;
  private readonly loginErr: Locator;

  // Signup tab
  private readonly signupEmailInput: Locator;
  private readonly signupEmailErr: Locator;
  private readonly signupPwdInput: Locator;
  private readonly signupPwdErr: Locator;
  private readonly signupTab: Locator;
  private readonly signupBtn: Locator;
  private readonly signupErr: Locator;

  constructor(page: Page) {
    super(page);

    // Login tab
    this.loginEmailErr = page.locator(`//div[@id='login-email-error']`);
    this.loginPwdInput = page.locator(`//input[@id='login-password']`);
    this.loginEmailInput = page.locator(`//input[@id='login-email']`);
    this.loginBtn = page.locator(`//button[@id='login-btn']`);
    this.loginErr = page.locator(`//div[@id='login-error']`);
    this.loginTab = page.locator(`//div[@id='login-tab']`);

    // Signup tab
    this.signupPwdErr = page.locator(`//div[@id='signup-password-error']`);
    this.signupEmailErr = page.locator(`//div[@id='signup-email-error']`);
    this.signupPwdInput = page.locator(`//input[@id='signup-password']`);
    this.signupEmailInput = page.locator(`//input[@id='signup-email']`);
    this.signupBtn = page.locator(`//button[@id='signup-btn']`);
    this.signupErr = page.locator(`//div[@id='signup-error']`);
    this.signupTab = page.locator(`//div[@id='signup-tab']`);
  }

  async login(email: string, pwd: string) {
    await this.loginTab.click();

    await this.loginEmailInput.fill(email);
    await this.loginPwdInput.fill(pwd);

    await this.loginBtn.click();
  }

  async signup(email: string, pwd: string) {
    await this.signupTab.click();

    await this.signupEmailInput.fill(email);
    await this.signupPwdInput.fill(pwd);

    await this.signupBtn.click();
  }

  async shouldHaveLoginError(err: string) {
    await expect(this.loginErr).toHaveText(err);
  }

  async shouldHaveLoginEmailError(err: string) {
    await expect(this.loginEmailErr).toHaveText(err);
  }

  async shouldHaveSignupError(err: string) {
    await expect(this.signupErr).toHaveText(err);
  }

  async shouldHaveSignupEmailError(err: string) {
    await expect(this.signupEmailErr).toHaveText(err);
  }

  async shouldHavePasswordError(err: string) {
    await expect(this.signupPwdErr).toHaveText(err);
  }
}