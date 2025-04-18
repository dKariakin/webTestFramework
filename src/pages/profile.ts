import { expect, Locator, Page } from '@playwright/test';

export default class ProfilePage {
  private readonly emailLabel: Locator;
  private readonly pageTitle: Locator;
  private readonly logoutBtn: Locator;

  constructor(page: Page) {
    this.pageTitle = page.locator(`//h1[@id='welcome-message']`);
    this.logoutBtn = page.locator(`//button[@id='logout-btn']`);
    this.emailLabel = page.locator(`//p[@id='user-email']`);
  }

  async logout() {
    await this.logoutBtn.click();
  }

  async shouldHavePageTitle(title: string) {
    await expect(this.pageTitle).toHaveText(title);
  }

  async shouldHaveUserEmail(email: string) {
    await expect(this.emailLabel).toContainText(email);
  }
}