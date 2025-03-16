import { expect, Locator, Page } from "@playwright/test";
import { Locales } from '../commons/locales';

export default class AuthPage {
  private readonly langSelector: Locator;

  private readonly loginEmailErr: Locator;
  private readonly emailInput: Locator;
  private readonly pwdInput: Locator;
  private readonly loginTab: Locator;
  private readonly loginBtn: Locator;
  private readonly loginErr: Locator;

  constructor(page: Page) {
    this.langSelector = page.locator(`//select[@id='language-select']`);

    this.loginEmailErr = page.locator(`//div[@id='login-email-error']`);
    this.emailInput = page.locator(`//input[@id='login-email']`);
    this.pwdInput = page.locator(`//input[@id=login-password]`);
    this.loginBtn = page.locator(`//button[@id='login-btn']`);
    this.loginErr = page.locator(`//div[@id='login-error']`);
    this.loginTab = page.locator(`//div[@id='login-tab']`);
  }

  async selectLanguage(lang: Locales) {
    await this.langSelector.selectOption(lang);
  }

  async login(email: string, pwd: string) {
    await this.loginTab.click();

    await this.emailInput.fill(email);
    await this.pwdInput.fill(pwd);

    await this.loginBtn.click();
  }

  async shouldHaveLoginError(err: string) {
    await expect(this.loginErr).toHaveText(err);
  }

  async shouldHaveLoginEmailError(err: string) {
    await expect(this.loginEmailErr).toHaveText(err);
  }
}