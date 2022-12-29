// @ts-check
const { test, expect } = require('@playwright/test');

test('homepage has title and links to intro page', async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Todo List 2022 with LocalStorage/);

  // Expect the page to have a create, category and list section
  await expect(page).toContainEqual('CREATE A TODO');
  // await expect(page).toContain('Pick a category');
  // await expect(page).toContain('TODO LIST');

  // // create a locator
  // const getStarted = page.getByRole('link', { name: 'Get started' });

  // // Expect an attribute "to be strictly equal" to the value.
  // await expect(getStarted).toHaveAttribute('href', '/docs/intro');

  // // Click the get started link.
  // await getStarted.click();
  
  // // Expects the URL to contain intro.
  // await expect(page).toHaveURL(/.*intro/);
});
