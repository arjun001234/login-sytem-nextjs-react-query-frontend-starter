import {GraphQLClient} from 'graphql-request';

const endpoint = "http://localhost:4000/query"

const client = new GraphQLClient(endpoint,{
    credentials: "include"
})

export default client