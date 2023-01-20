const Comment = require("./Comment")

class Post {
  constructor (content, author) {
    this.content = content
    this.author = author
    this.comments = []
    console.log(`
    Conteudo: ${this.content}
    Autor: ${this.author.name}
    Email: ${this.author.email}
    Comentarios: ${this.comments}`)
  }
  addComment (comment, commentAuthor) {
    const currentComment = new Comment (comment, commentAuthor)
    this.comments.push(currentComment)
  }
}

module.exports = Post