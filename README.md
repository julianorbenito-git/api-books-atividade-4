# API RESTful de Livros

API desenvolvida em Node.js com Express e MongoDB para gerenciamento de livros.

## Tecnologias Utilizadas

- Node.js
- Express
- MongoDB
- Mongoose
- Dotenv
- Cors
- Nodemon

## Funcionalidades

A API permite:

- Listar livros
- Cadastrar livros
- Atualizar livros
- Excluir livros

## Estrutura do Projeto

```text
livros-api/
│
├── models/
│   └── Livro.js
│
├── routes/
│   └── livros.js
│
├── .env
├── package.json
├── server.js
└── README.md
```

## Configuração

### 1. Clonar o repositório

```bash
git clone <url-do-repositorio>
cd livros-api
```

### 2. Instalar dependências

```bash
npm install
```

### 3. Configurar variáveis de ambiente

Criar o arquivo `.env` na raiz do projeto:

```env
PORT=3000
MONGO_URI=mongodb://localhost:27017/livrosdb
```

## Executando a Aplicação

Modo desenvolvimento:

```bash
npm run dev
```

Modo produção:

```bash
npm start
```

Saída esperada:

```text
Servidor rodando na porta 3000
MongoDB conectado com sucesso
```

## Endpoints

### Listar Livros

**GET**

```http
GET /livros
```

Exemplo:

```http
http://localhost:3000/livros
```

### Cadastrar Livro

**POST**

```http
POST /livros
```

Body:

```json
{
  "titulo": "Dom Casmurro",
  "autor": "Machado de Assis",
  "anoPublicacao": 1899,
  "genero": "Romance"
}
```

### Atualizar Livro

**PUT**

```http
PUT /livros/:id
```

Body:

```json
{
  "titulo": "Dom Casmurro",
  "autor": "Machado de Assis",
  "anoPublicacao": 1899,
  "genero": "Literatura Brasileira"
}
```

### Excluir Livro

**DELETE**

```http
DELETE /livros/:id
```

## Validações

A API valida:

- Título obrigatório
- Autor obrigatório
- Ano de publicação obrigatório
- Gênero obrigatório

## Tratamento de Erros

| Código | Descrição |
|---------|-----------|
| 200 | Sucesso |
| 201 | Registro criado |
| 400 | Requisição inválida |
| 404 | Registro não encontrado |
| 500 | Erro interno do servidor |

## Testando com Thunder Client

### Criar Livro

- Método: POST
- URL:

```text
http://localhost:3000/livros
```

Body JSON:

```json
{
  "titulo": "Dom Casmurro",
  "autor": "Machado de Assis",
  "anoPublicacao": 1899,
  "genero": "Romance"
}
```

### Listar Livros

- Método: GET

```text
http://localhost:3000/livros
```

## Autor
Juliano Romero Benito
Projeto desenvolvido para fins acadêmicos utilizando Node.js, Express e MongoDB.