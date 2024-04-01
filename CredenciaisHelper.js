import * as fs from 'fs';

export class CredenciaisHelper {
  static obterCredenciais() {
    let email, password;

    // Tenta obter a credencial da variável de ambiente
    email = process.env.EMAIL;
    password = process.env.PASSWORD;

    if (!email || !password) {
      // Tenta obter as credenciais do arquivo credentials.json
      const filePath = 'credentials.json';

      try {
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        const credentials = JSON.parse(fileContent);

        // Use as credenciais do arquivo JSON
        email = credentials.email;
        password = credentials.password;
      } catch (error) {
        console.error('Erro ao ler o arquivo credentials.json:', error);
        // Fornecer valores padrão ou lançar um erro, conforme necessário
      }
    }

    return { email, password };
  }
}