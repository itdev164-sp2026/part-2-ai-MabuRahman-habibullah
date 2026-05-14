import { test, expect } from "@playwright/test";

/**
 * E2E Tests for Authentication Flow
 *
 * These tests verify the complete authentication workflow including:
 * - Login page visibility and form elements
 * - Successful login and redirect behavior
 * - Sidebar navigation availability after login
 */

test.describe("Authentication Flow", () => {
  test("LOGIN PAGE VISIBLE: Navigate to /login and confirm the login form is visible", async ({
    page,
  }) => {
    // Navigate to the login page
    await page.goto("/login");

    // Verify the page header/title
    await expect(page.getByRole("heading", { name: /welcome back/i })).toBeVisible();

    // Verify email input is visible
    const emailInput = page.getByLabel(/email/i);
    await expect(emailInput).toBeVisible();

    // Verify password input is visible
    const passwordInput = page.getByLabel(/password/i);
    await expect(passwordInput).toBeVisible();

    // Verify submit button is visible
    const submitButton = page.locator("form").getByRole("button", { name: /sign in/i });
    await expect(submitButton).toBeVisible();
  });

  test("REDIRECT AFTER LOGIN: After successful login with valid credentials, user is redirected to dashboard", async ({
    page,
  }) => {
    // Skip test if credentials are not provided
    const testUserEmail = process.env.TEST_USER_EMAIL;
    const testUserPassword = process.env.TEST_USER_PASSWORD;

    test.skip(
      !testUserEmail || !testUserPassword,
      "Test credentials (TEST_USER_EMAIL and TEST_USER_PASSWORD) are not set in environment variables"
    );

    // Navigate to the login page
    await page.goto("/login");

    // Fill in the email field
    await page.getByLabel(/email/i).fill(testUserEmail!);

    // Fill in the password field
    await page.getByLabel(/password/i).fill(testUserPassword!);

    // Click the sign in button
    await page.locator("form").getByRole("button", { name: /sign in/i }).click();

    // Wait for navigation to complete
    // The user should be redirected to either the dashboard (/) or projects page
    await page.waitForURL((url) => {
      const pathname = url.pathname;
      return pathname === "/" || pathname === "/projects";
    });

    // Verify we're on the dashboard or projects page (not on login anymore)
    expect(page.url()).not.toContain("/login");
  });

  test("SIDEBAR NAVIGATION: After login, verify that sidebar navigation links are visible", async ({
    page,
  }) => {
    // Skip test if credentials are not provided
    const testUserEmail = process.env.TEST_USER_EMAIL;
    const testUserPassword = process.env.TEST_USER_PASSWORD;

    test.skip(
      !testUserEmail || !testUserPassword,
      "Test credentials (TEST_USER_EMAIL and TEST_USER_PASSWORD) are not set in environment variables"
    );

    // Navigate to the login page
    await page.goto("/login");

    // Perform login
    await page.getByLabel(/email/i).fill(testUserEmail!);
    await page.getByLabel(/password/i).fill(testUserPassword!);
    await page.locator("form").getByRole("button", { name: /sign in/i }).click();

    // Wait for navigation to complete
    await page.waitForURL((url) => {
      const pathname = url.pathname;
      return pathname === "/" || pathname === "/projects";
    });

    // Verify sidebar navigation links are visible
    // Scope to nav element to avoid ambiguous selectors
    const nav = page.locator("nav");

    // Look for "Projects" link
    const projectsLink = nav.getByRole("link", { name: /projects/i });
    await expect(projectsLink).toBeVisible();
  });
});
