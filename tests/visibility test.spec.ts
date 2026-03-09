import {test, expect} from '@playwright/test'
  
test('test home page', async ({page})=>{
    await page.goto('https://quality-engineering-labs.vercel.app/index.html');
    await page.getByRole('link', { name: 'Home' }).click();

    await expect(page).toHaveTitle(/MerchantHub/i);
});  