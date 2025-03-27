import { Locales } from '../src/commons/locales';
import { mockLoginSuccess, mockSignupSuccess } from '../src/mocks/auth';
import { test } from './fixture';

test.describe('Login flow', () => {
  test.beforeEach(async ({ auth }) => {
    await auth.open();
  });

  test('When user logs in with correct credentials, profile page should be opened', async ({ auth, profile }) => {
    const expectedEmail = 'test@email.com';
    const randUser = {
      email: expectedEmail,
      pwd: '123456',
    };
    await mockLoginSuccess(auth.getPage());

    await auth.login(randUser.email, randUser.pwd);

    await profile.shouldHavePageTitle('Welcome to your profile');
    await profile.shouldHaveUserEmail(expectedEmail);
  });

  test('When user logs in with another language selected, profile page should be opened in this language',
    async ({ auth, header, profile }) => {
      const expectedEmail = 'test@email.com';
      const randUser = {
        email: expectedEmail,
        pwd: '123456',
      };
      await mockLoginSuccess(auth.getPage());

      await header.selectLanguage(Locales.DE);
      await auth.login(randUser.email, randUser.pwd);

      await profile.shouldHavePageTitle('Willkommen auf Ihrem Profil');
      await profile.shouldHaveUserEmail(expectedEmail);
    });
});

test.describe('Signup flow', () => {
  test.beforeEach(async ({ auth }) => {
    await auth.open();
  });

  test('When a user signs up with correct data, profile page should be opened', async ({ auth, profile }) => {
    const expectedEmail = 'new_test@email.com';
    const newUser = {
      email: expectedEmail,
      pwd: '1We45678',
    };
    await mockSignupSuccess(auth.getPage());

    await auth.signup(newUser.email, newUser.pwd);

    await profile.shouldHavePageTitle('Welcome to your profile');
    await profile.shouldHaveUserEmail(expectedEmail);
  });

  [
    { title: 'empty password', pwd: '' },
    { title: 'short password', pwd: '1qW4567' },
    { title: 'lowercase letters only', pwd: 'qweqweqwe' },
    { title: 'no lowercase letters', pwd: '1Q345678' },
    { title: 'letters only', pwd: 'qweQWEqwe' }
  ].forEach((tc: { title: string, pwd: string }) => {
    test(`When user signs up using a password that doesn't follow requirements, error message should be shown ${tc.title}`, async ({ auth }) => {
      // Current requirements to the password: 
      // - 8 characters, 
      // - at least 1 number, 
      // - at least 1 capital letter
      await auth.signup('test@email.com', tc.pwd);

      await auth.shouldHavePasswordError('Password must be at least 8 characters with at least one number and one uppercase letter');
    });
  });
});