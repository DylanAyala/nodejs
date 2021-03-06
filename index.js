import express from "express"
import {ApolloServer} from 'apollo-server-express'
import {typeDefs} from './data/schema'
import {resolvers} from "./data/resolver";

var app = express();
const server = new ApolloServer({typeDefs, resolvers})

server.applyMiddleware({app})

app.listen({port: 4000}, () => {
    console.log(`El servidor esta corriendo ${server.graphqlPath}`)
})
