import { test } from '@playwright/test';
import AuthPage from '../src/pages/auth';

test.extend<{ auth: AuthPage }>({
  auth: async ({ page }, use) => {
    await use(new AuthPage(page));
  },
});