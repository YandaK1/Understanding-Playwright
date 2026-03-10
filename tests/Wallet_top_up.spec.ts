//Test to see if we can top up our balance using the 16 digit voucher pin.

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://quality-engineering-labs.vercel.app/index.html');
  await page.getByLabel('Main navigation').getByRole('link', { name: 'Wallet' }).click();
  await page.getByTestId('topup-btn').click();
  await page.getByRole('button', { name: 'R100' }).click();
  await page.locator('span').filter({ hasText: 'Voucher PIN' }).click();
  await page.getByTestId('topup-pin').click();
  await page.getByTestId('topup-pin').fill('1234567896541236');
  await page.getByTestId('process-topup').click();
  await page.getByText('Available Balance').click();
  await page.getByTestId('wallet-balance').click();
  const balanceLocator = page.getByTestId('wallet-balance');

  await expect(balanceLocator).toBeVisible();
  await expect(balanceLocator).toHaveText('R5 100,00');

});