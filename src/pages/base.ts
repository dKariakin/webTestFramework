import { expect, Page } from "@playwright/test";

export default abstract class BasePage {
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async open(): Promise<void> {
    await this.page.goto(``);
  }

  getPage(): Page {
    return this.page;
  }

  async shouldNotHaveUserData() {
    await this.page.evaluate(() => {
      expect(window.sessionStorage.getItem('authToken')).toBeUndefined();
      expect(window.sessionStorage.getItem('isAuthenticated')).toBeUndefined();
      expect(window.sessionStorage.getItem('userEmail')).toBeUndefined();
    });
  }
}