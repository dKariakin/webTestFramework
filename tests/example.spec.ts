import { mockLoginSuccess } from '../src/mocks/auth';
import { test } from './fixture';

test.describe('Login flow', () => {
  test.beforeEach(async ({ auth }) => {
    await auth.open();
  });

  test('When user logs in with correct credentials, profile page should be opened', async ({ auth, profile }) => {
    const randUser = {
      email: 'test@email.com',
      pwd: '123456',
    };
    await mockLoginSuccess(auth.getPage());

    await auth.login(randUser.email, randUser.pwd);

    await profile.shouldHavePageTitle('Welcome to your profile');
  });
});