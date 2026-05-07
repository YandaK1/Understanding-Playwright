import { test, expect } from '@playwright/test';

test('Changing settings', async ({ page }) => {
  await page.goto('https://quality-engineering-labs.vercel.app/settings.html');
  await page.getByTestId('set-store-name').click();
  await page.getByTestId('set-store-name').fill('The Merchant Store');
  await page.getByTestId('set-owner').click();
  await page.getByTestId('set-owner').fill('Admins');
  await page.getByTestId('set-email').click();
  await page.getByTestId('set-email').fill('admins@emails.com');
  await page.getByTestId('set-phone').click();
  await page.getByTestId('set-phone').fill('0721234567');
  await page.getByTestId('set-address').click();
  await page.getByTestId('set-address').fill('1234 Main Road, Pinelands, Cape Town. 7700');
  await page.getByTestId('set-commission').click();
  await page.getByTestId('set-commission').fill('10');
  await page.getByTestId('set-tax').click();
  await page.getByTestId('set-tax').fill('25');
  await expect(page.getByTestId('save-profile')).toBeVisible();
  
});