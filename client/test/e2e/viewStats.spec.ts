import { test, expect } from "@playwright/test";

test("can view stats of URL", async ({ page }) => {
  // Shorten a URL
  await page.goto("http://localhost:3000/");
  await page.fill('input[placeholder="Enter link here"]', "youtube.com");
  await page.click("text=Shorten URL");
  const shortURL = await page.locator("#shortURL").innerText();

  // Visit the short URL to collect click data
  await page.goto(shortURL);

  // Navigate to stats page and enter the short URL
  await page.goto("http://localhost:3000/stats");
  await page.fill('input[placeholder="Enter your LinkShrink here"]', shortURL);

  // Navigate to the data page
  await page.click("text=View Clicks");
  await expect(page).toHaveURL(
    `http://localhost:3000/data?url=${shortURL.split("/").pop()}`
  );

  const clickCount = await page.locator(".text-blue-500").innerText();
  expect(Number(clickCount)).toBeGreaterThan(0);
});
