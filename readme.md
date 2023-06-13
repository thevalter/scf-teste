
# Este é um teste para desenvolvedores

## Teste realizado de forma simples e objetiva

## Para rodar a aplicação, basta instalar as dependências e executar o comando "npm run dev"

## Caso queira testar as rotas no postman:

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/26682460-6ed9f2da-8d03-46a9-a372-d056ac7e0ca3?action=collection%2Ffork&source=rip_markdown&collection-url=entityId%3D26682460-6ed9f2da-8d03-46a9-a372-d056ac7e0ca3%26entityType%3Dcollection%26workspaceId%3Decf3ff00-f55e-49b0-b8f7-7e1d2addd718)
# possui 5 testes

## Introdução

Este projeto possui um banco de dados fake em fakeData.js com apenas um registro.
A ideia é melhorar e o CRUD escrito nos 4 arquivos de teste abaixo.

Será a validada a forma de escrita de código.
Escreva códigos que humanos consigam entender.

Fique a vontade para fazer modificaçoes nos serviços, comentários em código, estrutura, mas seja objetivo.

## teste1.js

GET em /user 

Possuimos neste arquivo um serviço que faz uma busca no banco fake e retorna um registro.
Este código funciona, mas é possivel melhorar.
Veja o que pode deixar ele melhor escrito e mais performatico.

## teste2.js

POST em /users, descubra a intenção dele e o corrija.

## teste3.js

Este procura um usuário e o deleta da base.
Retorne sucesso para o client caso realmente tenha sido excluido e deixe o código mais performatico.

## teste4.js

Atualiza os dados de um usuário especifico.

## teste5.js

Retorne quantas vezes determinado usuário foi lido no teste1.

## teste 6

Definina uma forma de criar permissão para o usuario, defina se o usuário pode deletar ou atualizar usuários. Crie um middleware para validar essas permissões e adicione no teste4 e teste3.

