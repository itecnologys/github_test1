import { test, expect } from '@playwright/test';

test('loads index.html', async ({ page }) => {
    await page.goto('http://localhost:3000/index.html');
    const title = await page.title();
    expect(title).toBe('Expected Title'); // Replace with the actual expected title
    const element = await page.locator('selector-for-element').isVisible(); // Replace with actual selector
    expect(element).toBe(true);
});