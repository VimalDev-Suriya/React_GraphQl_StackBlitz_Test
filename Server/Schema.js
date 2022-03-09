const { gql } = require('apollo-server');

// TYPE DEFNITIONS, WITH TYPE DEF AND QUERY
const typeDefs = gql`
    type MainCards{
        title:String,
        image:String
    }

    type Animals{
        id:ID!
        image:String!
        title:String!
        rating:Float!
        price:String!
        description:[String!]!
        stock: Int!,
        onSale: Boolean!,
        slug: String!,
        category:Category
    }

    type Category{
        id: ID!,
        image: String!,
        category: String!,
        slug: String,
        animals:[Animals!]!
    }

    type Query{
        mainCards:[MainCards]
        animals:[Animals]
        animal(slug:String):Animals
        categories:[Category!]!
        category(slug:String):Category
    }

    type Mutation{
        addAnimal(
            image:String!
            title:String!
            rating:Float!
            price:String!
            description:[String!]!
            stock: Int!,
            onSale: Boolean!,
            slug: String!,
            category:String
        ):Animals!,
        deleteAnimal(id:ID!):Boolean
    }
`;


module.exports = typeDefs