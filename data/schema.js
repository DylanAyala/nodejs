import {importSchema} from 'graphql-import'

const typeDefs = importSchema('./data/schemas.graphql')

export {typeDefs};