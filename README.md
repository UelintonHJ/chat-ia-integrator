# ✦ LlamaChat

Aplicação fullstack simples que integra uma Inteligência Artificial local utilizando Ollama e o modelo Llama 3, com backend em Node.js/Express e interface web para interação via navegador.

O projeto inclui validações, tratamento de erros, testes automatizados, pipeline de CI com GitHub Actions e execução via Docker.

---

## 📌 Descrição

O **LlamaChat** permite que o usuário envie prompts através de uma interface web e receba respostas geradas por uma IA local executada pelo Ollama.

A aplicação é dividida em:

- Backend (Node.js + Express)
- Frontend estático (HTML, CSS e JS)
- Integração com Ollama (Llama 3)
- Testes automatizados com Jest
- Containerização com Docker Compose
- CI pipeline com GitHub Actions

---

## 🧰 Tecnologias

### Backend

- Node.js
- Express
- dotenv
- cors

### Inteligência Artificial

- Ollama
- Llama 3

### Frontend

- HTML5
- CSS3
- JavaScript (Vanilla)

### Testes e DevOps

- Jest
- Nodemon
- Docker
- Docker Compose
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

## ▶️ Execução Local

Inicie o Ollama:

```
Ollama serve
```

Baixe o modelo:

```
ollama pull llama3
```

Execução a aplicação:

```
npm run dev
```

Acesse:

```
http://localhost:3000
```

---

## 🐳 Execução com Docker

Construir e iniciar os containers:

```
docker compose up --build
```

Instalar o modelo dentro do container Ollama:

```
docker exec -it chat-ia-integrator-ollama-1 ollama pull llama3
```

Acesse:

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

Envia um prompt para a Llama 3.

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
- Testes automatizados com Jest
- Frontend desacoplado do backend
- Pipeline CI com GitHub Actions
- Estrutura escalável (ready for growth)
- Containerização com Docker Compose
- Integração com IA local sem dependência de serviços pagos

## 🚀 CI Pipeline

O projeto utiliza GitHub Actions para automação:

- Executa em push na branch main
- Instala dependências
- Roda testes automaticamente

Arquivo:

```
.github/workflows/ci.yml
```