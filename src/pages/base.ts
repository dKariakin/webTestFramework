import { Page } from "@playwright/test";

export default abstract class BasePage {
  private readonly page: Page;
  private readonly path: string;

  constructor(page: Page, path: string) {
    this.page = page;
    this.path = path;
  }

  async open(): Promise<void> {
    await this.page.goto(``);
  }

  getPage(): Page {
    return this.page;
  }
}