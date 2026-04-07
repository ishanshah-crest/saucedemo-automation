import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class InventoryPage extends BasePage {
    readonly title: Locator;
    readonly cartLink: Locator;

    constructor(page: Page) {
        super(page);
        this.title = page.locator('.title');
        this.cartLink = page.locator('.shopping_cart_link');
    }

    async addItemToCart(itemName: string) {
        const itemId = itemName.toLowerCase().replace(/ /g, '-');
        const addToCartButton = this.page.locator(`[data-test="add-to-cart-${itemId}"]`);
        await addToCartButton.click();
    }

    async navigateToCart() {
        await this.cartLink.click();
    }
}
