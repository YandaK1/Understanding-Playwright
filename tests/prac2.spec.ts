import { test, expect } from '@playwright/test';

test('user can log into dashboard', async ({ page }) => {
  await page.goto('https://quality-engineering-labs.vercel.app/login.html');
  await page.fill('#login-username', 'admin');
  await page.fill('#login-password', 'password123');
  await page.click('button[type="submit"]');
//   await expect(page).toHaveText(/Welcome back, Admin/i);
await expect(page.getByTestId('dashboard-title')).toHaveText('Welcome back, Admin');
});   