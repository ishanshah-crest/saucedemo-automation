# SauceDemo Playwright Automation

This is an automated test suite for solving the SauceDemo Automation assignment using [Playwright](https://playwright.dev/) and TypeScript.

## Architecture

The project uses the **Page Object Model (POM)** and **Playwright Fixtures** to maintain DRY principles and ensure a scalable, enterprise-grade test architecture suitable for parallel CI/CD execution.

### Project Structure

```text
├── .env.example             # Example environment variables (URL/Credentials)
├── playwright.config.ts     # Playwright configuration (browsers, retries, URL)
├── package.json             # NPM dependencies and scripts
├── fixtures/
│   └── loginFixture.ts      # Custom test fixtures that inject initialized POMs and authenticated state
├── pages/
│   ├── BasePage.ts          # Common page abstractions
│   ├── CartPage.ts          # Page Object for Shopping Cart
│   ├── InventoryPage.ts     # Page Object for Products List
│   └── LoginPage.ts         # Page Object for the Login Page
└── tests/
    └── checkout.spec.ts     # Core workflow integration test
```

## Setup Instructions

### 1. Install Dependencies
Make sure you have Node (>= 18) installed.
```bash
npm install
```

### 2. Install Playwright Browsers
```bash
npx playwright install --with-deps
```

### 3. Setup Environment Variables
Make a copy of the example environment file:
```bash
cp .env.example .env
```
Ensure the variables in `.env` are set correctly (Base URL and user credentials). `.env` is intentionally ignored via `.gitignore` to prevent secret leaks.

## Running Tests

To run the full suite across all configured browsers (Chromium, Firefox, WebKit):
```bash
npx playwright test
```

To run a specific browser only:
```bash
npx playwright test --project=chromium
```

To view the HTML report after execution:
```bash
npx playwright show-report
```

## Highlights & Design Decisions

* **Data-driven properties via `.env`**: Usernames, passwords, and URLs are configured dynamically rather than hardcoded in the source logic. 
* **Semantic Locators**: Instead of using brittle XPath/CSS, the framework leverages custom `data-test` attributes provided out-of-the-box by SauceDemo. 
* **Custom Playwright Fixtures (`authenticatedPage`)**: The test script automatically inherits pre-established context state without polluting tests with repeating login steps setups.
* **No `waitForTimeout` Hard Waits**: Handled exclusively using built-in Playwright auto-waiting assertions (`expect(locator).toBeVisible()` or `expect(locator).toBeEnabled()`). 
