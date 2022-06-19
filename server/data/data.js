const Post = require('../model/Post')
const Author = require('../model/Author')

const mongoDataMethods = {
    getAllPosts: async (condition = null) => condition === null ?await Post.find() : await Post.find(condition),
    getAllAuthors: async () => await Author.find(),
    getAuthorById: async id => await Author.findById(id),
    getPostById: async id => await Post.findById(id),

    //Mutation
    createPost: async (args) => {
        const newPost = new Post(args)
        return await newPost.save()
    },
    createAuthor: async (args) =>{
        const newAuthor = new Author(args)
        return await newAuthor.save()
    }
}

module.exports = mongoDataMethods