import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class CartPage extends BasePage {
    readonly checkoutButton: Locator;
    readonly cartItemsList: Locator;

    constructor(page: Page) {
        super(page);
        this.checkoutButton = page.locator('[data-test="checkout"]');
        this.cartItemsList = page.locator('.cart_item');
    }

    /**
     * Verifies an item with exactly this name exists in the cart.
     */
    async verifyItemInCart(itemName: string) {
        const item = this.cartItemsList.filter({ hasText: itemName });
        await expect(item).toBeVisible();
    }

    /**
     * Checks if the checkout button is enabled and ready to be clicked.
     */
    async verifyCheckoutButtonEnabled() {
        await expect(this.checkoutButton).toBeVisible();
        await expect(this.checkoutButton).toBeEnabled();
    }
}
