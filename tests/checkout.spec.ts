import { test } from '../fixtures/loginFixture';

test.describe('SauceDemo Checkout Workflow', () => {

    test('Add backpack to cart and verify checkout', async ({ authenticatedPage, cartPage }) => {
        const itemToAdd = 'Sauce Labs Backpack';
        await authenticatedPage.addItemToCart(itemToAdd);
        await authenticatedPage.navigateToCart();
        await cartPage.verifyItemInCart(itemToAdd);

        await cartPage.verifyCheckoutButtonEnabled();
    });
});
