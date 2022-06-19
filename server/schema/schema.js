const {gql} = require('apollo-server');
const typeDefs = gql`
    type Post {
        id: ID
        name: String
        content: String
        genre: String
        author: Author
    }

    type Author {
        id: ID
        name: String
        age: Int
        posts: [Post]
    }

# The query type, represents the current state of the system
    type Query {
        posts: [Post]
        authors: [Author]
        post(id: ID!): Post
        author(id: ID!): Author
    }
    type Mutation {
        createAuthor(name: String, age: Int): Author
        createPost(name: String, content: String, genre: String, authorId: ID!): Post
    }
`
module.exports = typeDefs;