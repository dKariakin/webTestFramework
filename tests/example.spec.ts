import { mockLoginSuccess } from '../src/mocks/auth';
import { test } from './fixture';

test.describe('Login flow', () => {
  test.beforeEach(async ({ auth }) => {
    await auth.open();
  });

  test('When user logs in with correct credentials, account page should be opened', async ({ auth }) => {
    const randUser = { 
      email: 'test@email.com', 
      pwd: '123456', 
    };
    await mockLoginSuccess(auth.getPage());

    await auth.login(randUser.email, randUser.pwd);
    
    await auth.shouldHaveLoginEmailError('');
    // TODO add assertion that profile page is opened
  });
});