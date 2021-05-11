const graphql = require('graphql')
const _ = require('lodash')
const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql

// dummy data
var books = [
    { name: "name 1", id: "1", genre: "horror" },
    { name: "name 2", id: "2", genre: "horror" },
]

// define and entity and its fields
const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        genre: { type: GraphQLString }
    })
})

// root query to jump initially in Graph
const RootQuery = new GraphQLObjectType({
        name: 'RootQueryType',
        fields: {
            book: {
                type: BookType,
                args: { id: { type: GraphQLString } },
                resolve(parent, args) {
                    // parent is to deal with realtions with other entities
                    //code to get dta from db
                    return _.find(books, { id: args.id })
                }
            }
        }
    })
    // finally creating the Schema 
module.exports = new GraphQLSchema({
    query: RootQuery
})