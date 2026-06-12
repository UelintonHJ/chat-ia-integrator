# ✦ GemChat

Aplicação fullstack simples que integra a API do Google Gemini com um backend em Node.js/Express e uma interface web para interação com IA.

O projeto inclui validações, tratamento de erros, testes automatizados e pipeline de CI com GitHub Actions.

---

## 📌 Descrição

O **GemChat** permite que o usuário envie prompts através de uma interface web e receba respostas geradas pela IA do Google Gemini.

A aplicação é dividida em:

- Backend (Node.js + Express)
- Frontend estático (HTML, CSS e JS)
- Integração com Gemini API
- Testes automatizados com Jest
- CI pipeline com GitHub Actions

---

## 🧰 Tecnologias

### Backend

- Node.js
- Express
- @google/genai
- dotenv
- cors

### Frontend

- HTML5
- CSS3
- JavaScript (Vanilla)

### Testes e DevOps

- Jest
- Nodemon
- GitHub Actions (CI)

---

## ⚙️ Instalação

Clone o repositório:

```
git clone https://github.com/UelintonHJ/chat-ia-integrator.git
```

Acesse o projeto:

```
cd chat-ia-integrator
```

Instale as dependências:

```
npm install
```

---

## 🔐 Configurações do ambiente

Crie um arquivo .env na raiz:

```
GEMINI_API_KEY=sua_chave_aqui
```

---

## ▶️ Execução

### Modo desenvolvimento

```
npm run dev
```

### Modo produção

```
npm start
```

Acesse no navegador:

```
http://localhost:3000
```

---

## 🧪 Testes

Executar testes com Jest:

```
npm test
```

Testes cobrem:

- Validação de prompt (validatePrompt)
- Validação de resposta (validateResponse)

---

## API

### POST /chat

Envia um prompt para a IA Gemini.

#### Request

```
{
  "prompt": "Explique o que é SOLID"
}
```

#### Response

```
{
  "answer": "Resposta gerada pela IA"
}
```

---

## 🧠 Boas práticas aplicadas

- Separação de responsabilidade (Controller/Service/Utils)
- Validação de entrada do usuário
- Tratamento de erros centralizados no controller
- Uso de constantes para mensagens e modelo IA
- Variáveis de ambiente (.env)
- Testes automatizados com Jest
- Frontend desacoplado do backend
- Pipeline CI com GitHub Actions
- Estrutura escalável (ready for growth)

## 🚀 CI Pipeline

O projeto utiliza GitHub Actions para automação:

- Executa em push na branch main
- Instala dependências
- Roda testes automaticamente

Arquivo:

```
.github/workflows/ci.yml
```