const Post = require("./Post")

class Author {
  constructor (name, email) {
    this.name = name
    this.email = email
    this.posts = []
  }
  createPost (content) {
    let currentPost = new Post(content,{name: this.name, email: this.email})
    this.posts.push(currentPost)
  }
}

module.exports = Author