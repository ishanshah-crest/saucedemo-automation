import { Page } from '@playwright/test';

export abstract class BasePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    /**
     * Navigates to a generic path starting from the Base URL
     */
    async goto(path: string = '/') {
        await this.page.goto(path);
    }
}
