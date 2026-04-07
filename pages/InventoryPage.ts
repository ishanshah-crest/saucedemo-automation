import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class InventoryPage extends BasePage {
    readonly title: Locator;
    readonly cartLink: Locator;

    constructor(page: Page) {
        super(page);
        this.title = page.getByTestId('title');
        this.cartLink = page.getByTestId('shopping-cart-link');
    }

    getItemByName(itemName: string): Locator {
        return this.page.locator('.inventory_item').filter({ hasText: itemName });
    }

    async addItemToCart(itemName: string): Promise<void> {
        const item = this.getItemByName(itemName);
        await item.getByRole('button', { name: 'Add to cart' }).click();
    }

    async navigateToCart() {
        await this.cartLink.click();
        await this.page.waitForURL('**/cart.html');
    }
}
