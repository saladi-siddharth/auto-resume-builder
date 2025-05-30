const { test, expect } = require('@playwright/test');

test('Resume creation end-to-end flow', async ({ page }) => {
  // Navigate to the editor page
  await page.goto('http://localhost:5173/editor');

  // Test AI prompt input
  await page.fill('textarea[placeholder*="Generate a resume"]', 'Generate a resume for a software engineer with 5 years of experience');
  await page.click('button:text("Generate Resume")');
  await page.waitForTimeout(1000); // Wait for API response (mocked in aiService.js)

  // Verify form fields are populated
  const nameField = await page.inputValue('input[name="name"]');
  expect(nameField).toBe('John Doe'); // Based on aiService.js mock response

  // Edit form field
  await page.fill('input[name="name"]', 'Jane Smith');
  await page.waitForTimeout(500); // Wait for debounced update

  // Verify real-time preview
  const preview = await page.locator('.bg-white.p-4.border').innerHTML();
  expect(preview).toContain('Jane Smith');

  // Switch template
  await page.click('button:text("Classic")');
  await page.waitForTimeout(500); // Wait for preview update
  const updatedPreview = await page.locator('.bg-white.p-4.border').innerHTML();
  expect(updatedPreview).toContain('Jane Smith');

  // Test PDF download
  const [download] = await Promise.all([
    page.waitForEvent('download'),
    page.click('button:text("Download PDF")')
  ]);
  const downloadPath = await download.path();
  expect(downloadPath).toBeTruthy();
});