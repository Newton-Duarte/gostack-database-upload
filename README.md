<img alt="GoStack" src="https://storage.googleapis.com/golden-wind/bootcamp-gostack/header-desafios-new.png" />

<h3 align="center">Bootcamp GoStack 13 - Desafio: Banco de dados e upload de arquivos no Node.js</h3>

Nesse desafio, devemos continuar desenvolvendo a aplicação de gestão de transações, para continuar treinando o que aprendemos até agora no Node.js junto ao TypeScript, mas dessa vez incluindo o uso de banco de dados com o TypeORM e envio de arquivos com o Multer!

Essa aplicação deve armazenar transações financeiras de entrada e saída e permitir o cadastro e a listagem dessas transações, além de permitir a criação de novos registros no banco de dados a partir do envio de um arquivo csv.

#### Para esse desafio temos os seguintes testes:

- should be able to create a new transaction
- should create tags when inserting new transactions
- should not create tags when they already exists
- should be able to list the transactions
- should not be able to create outcome transaction without a valid balance
- should be able to delete a transaction
- should be able to import transactions

## Clonar e Testar

`$ git clone https://github.com/Newton-Duarte/gostack-database-upload`

`$ cd gostack-database-upload`

`$ yarn` ou `$ npm install`

`$ yarn test` ou `$ npm run test`

![Resultado dos testes](/tests-result.png)

![Resultado dos testes](/gostack-database-upload.png)