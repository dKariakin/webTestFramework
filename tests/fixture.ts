import { test as base } from '@playwright/test';
import AuthPage from '../src/pages/auth';

export const test = base.extend<{ auth: AuthPage }>({
  auth: async ({ page }, use) => {
    await use(new AuthPage(page));
  },
});