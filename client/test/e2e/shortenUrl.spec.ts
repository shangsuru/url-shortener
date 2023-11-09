import { test, expect } from "@playwright/test";
import type { Page } from "playwright";

async function createShortURL(page: Page) {
  await page.goto("http://localhost:3000/");
  await page.fill('input[placeholder="Enter link here"]', "youtube.com");
  await page.click("text=Shorten URL");
}

async function checkShortURL(page: Page) {
  await expect(page.locator("#longURL")).toHaveText("youtube.com");
  await expect(page.locator("#shortURL")).toContainText("localhost:8080/");
  await expect(page.locator("#shortURL")).toHaveAttribute(
    "href",
    "https://youtube.com"
  );
}

test("shortens a URL", async ({ page }) => {
  await createShortURL(page);
  await checkShortURL(page);
});

test("URL components persist after reload", async ({ page }) => {
  await createShortURL(page);
  await page.reload();
  await checkShortURL(page);
});

test("URL components can be closed", async ({ page }) => {
  await createShortURL(page);
  // Click on the close button
  await page.locator("#close").click();
  // Check that the URL component is not visible
  await expect(page.locator("#longURL")).not.toBeVisible();
  // Reload the page to ensure that the URL components are not present
  await page.reload();
  await expect(page.locator("#longURL")).not.toBeVisible();
});

test("can navigate to show url stats page", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await page.click("text=Show URL Stats");
  await expect(page).toHaveURL("http://localhost:3000/stats");
});
