import { Locator, Page } from "@playwright/test";
import { Locales } from "../commons/locales";

export default class HeaderSection {
  private readonly langSelector: Locator;

  constructor(page: Page) {
    this.langSelector = page.locator(`//select[@id='language-select']`);
  }

  async selectLanguage(lang: Locales) {
    await this.langSelector.selectOption(lang);
  }
}