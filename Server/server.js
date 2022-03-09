const { ApolloServer } = require('apollo-server');
const { animals, mainCards, categories } = require('./db');

const typeDefs = require('./Schema');
const Query = require('./Resolvers/Query');
const Mutation = require('./Resolvers/Mutation');
const Category = require('./Resolvers/Category');
const Animals = require('./Resolvers/Animals');

const server = new ApolloServer({ 
    typeDefs, 
    resolvers :{
        Query,
        Mutation,
        Animals,
        Category
    },
    context:{
        animals, 
        mainCards, 
        categories
    }
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
