# Case de Back-end: Amaro

Este projeto de Back-end foi proposto pela Labenu para treinar a participação em projetos técnicos de processos de seleção. O sistema controla o registro de produtos.

## 🎯 Endpoints:

- SignUp: Endpoint para cadastrar um administrador no sistema. Retorna um token de acesso para realizar a manipulação dos produtos. Recebe um body com as seguintes informações:
```
{
    "name": "", 
    "email": "", 
    "password": ""
}
```
- SignIn: Endpoint para fazer o login do administrador no sistema. Retorna um token de acesso.
```
{
    "email": "",
    "password": ""
}
```

- Register: Endpoint para cadastrar um produto no sistema. Recebe o token via headers e um body com as seguintes informações:
```
{
    "photo": "", 
    "name": "", 
    "price": "", 
    "type": "", 
    gender": "", 
    "description": ""
}
```
- Details: Endpoint para pegar os detalhes de um produto. Recebe o nome do produto por parâmetro e também um token de autorização via headers.


###  🛠 Tecnologias utilizadas:
- TypeScript;
- Node.js;
- MySQL;
### 📚 Bibliotecas utilizadas:
- Express;
- CORS;
- Dotenv;
- Knex;
- Bcrypt;
- Jsonwebtoken;
- uuid.


## 📊 Tabelas Sql:
```
CREATE TABLE amaro_sellers (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);
CREATE TABLE amaro_products (
    id VARCHAR(255) PRIMARY KEY,
    photo VARCHAR(255) NOT NULL UNIQUE,
    name VARCHAR(255) NOT NULL UNIQUE,
    description TEXT,
    type VARCHAR(255) NOT NULL,
    price FLOAT NOT NULL,
    gender VARCHAR(255) NOT NULL

);
```
### Link para a documentação:


https://documenter.getpostman.com/view/20353584/VUjTihxS
