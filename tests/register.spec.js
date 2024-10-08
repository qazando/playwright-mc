// @ts-check
const { test, expect } = require('@playwright/test');

test('Cadastro com nome vazio', async ({ page }) => {
  await page.goto('https://automationpratice.com.br/register');
  await page.locator('#email').fill('teste@teste.com')
  await page.locator('#password').fill('123456')
  await page.waitForTimeout(25000);
  await page.locator('#btnRegister').click()
  await expect(page.getByText('O campo nome deve ser')).toBeVisible();
});

test('Cadastro com email vazio @login', async ({ page }) => {
  await page.goto('https://automationpratice.com.br/register');
  await page.locator('#user').fill('Teste Qazando')
  await page.locator('#password').fill('123456')
  await page.locator('#btnRegister').click()
  await expect(page.getByText('O campo e-mail deve ser prenchido corretamente')).toBeVisible();
});

test('Cadastro com email inválido @login', async ({ page }) => {
  await page.goto('https://automationpratice.com.br/register');
  await page.locator('#user').fill('Teste Qazando')
  await page.locator('#password').fill('123456')
  await page.locator('#btnRegister').click()
  await expect(page.getByText('O campo e-mail deve ser prenchido corretamente')).toBeVisible();
});

test('Cadastro com senha vazia @login', async ({ page }) => {
  await page.goto('https://automationpratice.com.br/register');
  await page.locator('#user').fill('Teste Qazando')
  await page.locator('#password').fill('123456')
  await page.locator('#btnRegister').click()
  await expect(page.getByText('O campo e-mail deve ser prenchido corretamente')).toBeVisible();
});

test('Cadastro com senha inválida @login', async ({ page }) => {
  await page.goto('https://automationpratice.com.br/register');
  await page.locator('#user').fill('Teste Qazando')
  await page.locator('#password').fill('123456')
  await page.locator('#btnRegister').click()
  await expect(page.getByText('O campo e-mail deve ser prenchido corretamente')).toBeVisible();
});

test('Cadastro com formulário vazio', async ({ page }) => {

});

test('Cadastro com sucesso', async ({ page }) => {

});
