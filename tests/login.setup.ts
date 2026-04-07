import { test as setup } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

const authFile = 'playwright/.auth/user.json';

setup('authenticate', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.login();

    // Ensure we reached the inventory before saving state
    await page.waitForURL('**/inventory.html');

    // Save authentication state
    await page.context().storageState({ path: authFile });
});
