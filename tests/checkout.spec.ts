import { test, expect } from '../fixtures/loginFixture';

test.describe('SauceDemo Checkout Workflow', () => {

    test('Login successful and products are visible', async ({ authenticatedPage }) => {
        await expect(authenticatedPage.title).toBeVisible();
        await expect(authenticatedPage.title).toHaveText('Products');
        
        const inventoryItems = authenticatedPage.page.locator('.inventory_item');
        await expect(inventoryItems.first()).toBeVisible();
        expect(await inventoryItems.count()).toBeGreaterThan(0);
    });

    test('Add backpack to cart and verify checkout', async ({ authenticatedPage, cartPage }) => {
        const itemToAdd = 'Sauce Labs Backpack';
        await authenticatedPage.addItemToCart(itemToAdd);
        await authenticatedPage.navigateToCart();
        await cartPage.verifyItemInCart(itemToAdd);

        await cartPage.verifyCheckoutButtonEnabled();
    });
});
