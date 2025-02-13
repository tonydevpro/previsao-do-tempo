# ⛅ Buscador de Previsão do Tempo

Este é um projeto simples feito em React que permite pesquisar a previsão do tempo de uma cidade usando a API do OpenWeatherMap. O usuário insere o nome da cidade e recebe informações sobre temperatura, país, descrição do clima e um ícone representativo.

## 📌 Funcionalidades

- Busca de previsão do tempo em tempo real
- Consumo da API OpenWeatherMap
- Exibição de temperatura, país, descrição do clima e ícone
- Interface simples e intuitiva

## 🚀 Tecnologias Utilizadas

- React 19
- CSS para estilização
- API OpenWeatherMap

## 📦 Instalação e Execução

1. Clone o repositório:
   ```sh
   git clone https://github.com/tonydevpro/buscador-previsao-react.git
   ```

2. Acesse a pasta do projeto:
   ```sh
   cd buscador-previsao-react
   ```

3. Instale as dependências:
   ```sh
   npm install
   ```

4. Inicie o projeto:
   ```sh
   npm start
   ```

## 🔧 Como Funciona

1. O usuário insere o nome da cidade no campo de busca.
2. O formulário é enviado e uma requisição é feita para a API do OpenWeatherMap.
3. Os dados retornados são processados e exibidos na tela, incluindo:
   - Temperatura atual
   - Nome do país
   - Nome da cidade
   - Descrição do clima
   - Ícone representativo

## ⚠️ Observações

- Certifique-se de substituir `appid=SEU_APP_ID` na URL da API pelo seu próprio APP ID obtido no site do OpenWeatherMap.
- A API utiliza unidades de temperatura em Celsius (`units=metric`).

## 📜 Licença

Este projeto está sob a licença MIT. Sinta-se à vontade para utilizá-lo e modificá-lo conforme necessário.

## 💎 Autor

Criado por [tonydevpro](https://github.com/tonydevpro).
