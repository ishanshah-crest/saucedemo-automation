import { test as baseTest } from '@playwright/test';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';

// Declare the types of fixtures
type SauceDemoFixtures = {
    inventoryPage: InventoryPage;
    cartPage: CartPage;
    authenticatedPage: InventoryPage;
};

// Extend base test to include custom fixtures
export const test = baseTest.extend<SauceDemoFixtures>({
    inventoryPage: async ({ page }, use) => {
        await use(new InventoryPage(page));
    },
    cartPage: async ({ page }, use) => {
        await use(new CartPage(page));
    },
    // Already authenticated via global setup (storageState)
    authenticatedPage: async ({ inventoryPage }, use) => {
        await inventoryPage.goto('/inventory.html');
        await use(inventoryPage);
    }
});

export { expect } from '@playwright/test';
