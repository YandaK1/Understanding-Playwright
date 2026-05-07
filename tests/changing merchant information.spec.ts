import { test, expect } from '@playwright/test';

test('changing merchant information', async ({ page }) => {
  await page.goto('https://quality-engineering-labs.vercel.app/login.html');
  await page.getByTestId('login-username').click();
  await page.getByTestId('login-username').fill('admin');
  await page.getByTestId('login-password').click();
  await page.getByTestId('login-password').fill('password123');
  await page.getByTestId('login-submit').click();
  await page.getByLabel('Main navigation').getByRole('link', { name: 'Customers' }).click();
  await page.getByTestId('edit-cust-0').click();
  await page.getByTestId('cust-name').fill('Andile Preston');
  await page.getByTestId('cust-phone').click();
  await page.getByTestId('cust-phone').fill('0761247649');
  await page.getByTestId('cust-email').click();
  await page.getByTestId('cust-email').fill('andile.n@fakeemail.co.za');
  await page.getByTestId('save-cust-btn').click();
  
  await expect(page.getByTestId('cust-name-0')).toBeVisible();
});