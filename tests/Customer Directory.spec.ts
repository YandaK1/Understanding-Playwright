
import { test, expect } from '@playwright/test';

test('adding to Customer directory', async ({ page }) => {
  await page.goto('https://quality-engineering-labs.vercel.app/customers.html');
  await page.getByTestId('add-cust-btn').click();
  await page.getByTestId('cust-name').click();
  await page.getByTestId('cust-name').fill('Luzuko');
  await page.getByTestId('cust-phone').click();
  await page.getByTestId('cust-phone').fill('0761234567');
  await page.getByTestId('save-cust-btn').click();
  
});