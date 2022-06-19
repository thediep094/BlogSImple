const express = require('express');
const { ApolloServer, gql } = require('apollo-server');
const mongoose = require('mongoose');
const typeDefs = require('./schema/schema');
const resolvers = require('./resolver/resolvers');
const mongoDataMethods = require('./data/data')



const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => ({ mongoDataMethods })
});

const connectDB = async () => {
	try {
		await mongoose.connect(`mongodb+srv://thediep094:diep0904@blog.zkgbj.mongodb.net/?retryWrites=true&w=majority`)
		console.log('MongoDB connected sucessfully')
	} catch (error) {
		console.log(error.message)
		process.exit(1)
	}
}

connectDB()

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
