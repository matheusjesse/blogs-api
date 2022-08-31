# Projeto Blogs-api

Nesse projeto foi desenvolvido uma API para um blog.

## Implementações

- Uma rota Users que faz a criação de um usuário e retorna os usuários cadastrados
- Uma rota BlogPost que retorna os Post do blog
- Uma rota de category que faz a criação de uma categoria do post e outra que retorna as categorias cadastradas.
- Uma rota de login que faz o login consultando o usuário no banco de dados. (A validação do usuário é feita atraves de um Token que foi criado usando a biblioteca JWT)

## Tecnologias

- [node.js] 
- [Express] 
- [Sequelize]
- [JWT - JSON WEB TOKEN]

## Instalação

Dillinger requires [Node.js](https://nodejs.org/) v16+ to run.

Instalando o projeto e iniciando

```sh
cd blogs-api
npm install
npm start
```

## Melhorias
- Pretende continuar o projeto e finalizar o CRUD completo, por enquanto só finalizei a criação e a leitura de dados, vou finalizar a parte de fazer a atualização e remoção de dados.
- Também pretendo implementar testes Unitários.


###### Projeto criado por [Matheus Jessé](www.linkedin.com/in/matheusjesse)

