const Author = require("./Author");

const joao = new Author("João Aiub", "joaoribeiroaiub@gmail.com")


joao.createPost("Olá mundo, tudo bem ?")


joao.posts[0].addComment("Bela tese meu querido","Desconhecido")

console.log(joao.posts[0]);