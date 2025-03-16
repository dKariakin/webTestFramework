import { test as base } from '@playwright/test';
import AuthPage from '../src/pages/auth';
import ProfilePage from '../src/pages/profile';
import HeaderSection from '../src/pages/header';

export const test = base.extend<{
  auth: AuthPage;
  profile: ProfilePage;
  header: HeaderSection;
}>({
  auth: async ({ page }, use) => {
    await use(new AuthPage(page));
  },
  profile: async ({ page }, use) => {
    await use(new ProfilePage(page));
  },
  header: async ({ page }, use) => {
    await use(new HeaderSection(page));
  }
});