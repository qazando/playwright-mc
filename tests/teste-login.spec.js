import { test, expect } from '@playwright/test';
import { CredenciaisHelper } from '../CredenciaisHelper';

test('teste de login @login', async ({ page }) => {
  await page.goto('https://automationpratice.com.br/');
  await page.getByRole('link', { name: ' Login' }).click();
  await page.locator('#user').click();
  await page.locator('#user').fill('herbertao@gmail.com');
  await page.locator('#password').click();
  await page.locator('#password').fill('123456');
  await page.getByRole('button', { name: 'login' }).click();
  await page.getByRole('button', { name: 'OK' }).click();
});

test('teste de login com usuario protegido @protegido', async ({ page }) => {
  const { email, password } = CredenciaisHelper.obterCredenciais();

  await page.goto('https://automationpratice.com.br/');
  await page.getByRole('link', { name: ' Login' }).click();
  await page.locator('#user').click();
  await page.locator('#user').fill(email);
  await page.locator('#password').click();
  await page.locator('#password').fill(password);
  await page.getByRole('button', { name: 'login' }).click();
  await page.getByRole('button', { name: 'OK' }).click();
});

test('teste de login 3 @login', async ({ page }) => {
  await page.goto('https://automationpratice.com.br/');
  await page.getByRole('link', { name: ' Login' }).click();
  await page.locator('#user').click();
  await page.locator('#user').fill('herbertao@gmail.com');
  await page.locator('#password').click();
  await page.locator('#password').fill('123456');
  await page.getByRole('button', { name: 'login' }).click();
  await page.getByRole('button', { name: 'OK' }).click();
});

test('teste de login 1 @login', async ({ page }) => {
  await page.goto('https://automationpratice.com.br/');
  await page.getByRole('link', { name: ' Login' }).click();
  await page.locator('#user').click();
  await page.locator('#user').fill('herbertao@gmail.com');
  await page.locator('#password').click();
  await page.locator('#password').fill('123456');
  await page.getByRole('button', { name: 'login' }).click();
  await page.getByRole('button', { name: 'OK' }).click();
});

test('teste de login 2 @login', async ({ page }) => {
  await page.goto('https://automationpratice.com.br/');
  await page.getByRole('link', { name: ' Login' }).click();
  await page.locator('#user').click();
  await page.locator('#user').fill('herbertao@gmail.com');
  await page.locator('#password').click();
  await page.locator('#password').fill('123456');
  await page.getByRole('button', { name: 'login' }).click();
  await page.getByRole('button', { name: 'OK' }).click();
});