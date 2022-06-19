// const { posts, authors } = require("../data/data");
const mongoDataMethods = require('../data/data')
const resolvers = {
    Query: {
        posts : async (parent, args, {mongoDataMethods}) => await mongoDataMethods.getAllPosts(),
        authors: async (parent, args, {mongoDataMethods}) => await mongoDataMethods.getAllAuthors(),
        post: async (parent, {id} ,{mongoDataMethods}) => await mongoDataMethods.getPostById(id),
        author: async (parent, {id} ,{mongoDataMethods}) => await mongoDataMethods.getAuthorById(id),
    },

    Post :{
        author: async ({authorId},args,{mongoDataMethods}) => await mongoDataMethods.getAuthorById(authorId)
    },

    Author:{
        posts: async ({id} , args , {mongoDataMethods}) => await mongoDataMethods.getAllPosts({authorId : id})
    },


// Mutations
    Mutation: {
        createPost: async (parent, args, {mongoDataMethods}) => await mongoDataMethods.createPost(args)
        ,
        createAuthor : async (parent, args, {mongoDataMethods}) => await mongoDataMethods.createAuthor(args)
    }
}

module.exports = resolvers;