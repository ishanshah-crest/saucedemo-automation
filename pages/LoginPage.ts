import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {
        super(page);
        this.usernameInput = page.getByTestId('username');
        this.passwordInput = page.getByTestId('password');
        this.loginButton = page.getByRole('button', { name: 'Login' });
    }

    async navigate() {
        await this.goto('/');
    }

    async login(username?: string, password?: string) {
        const user = username || process.env.SAUCE_USERNAME;
        const pass = password || process.env.SAUCE_PASSWORD;

        if (!user || !pass) {
            throw new Error('Username and Password must be provided either via arguments or .env variables');
        }

        await this.usernameInput.fill(user);
        await this.passwordInput.fill(pass);
        await this.loginButton.click();
    }
}
