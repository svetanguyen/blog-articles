// ./apollo-client.js

import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";

const link = createHttpLink({
    uri: 'https://powerful-beyond-01021.herokuapp.com/graphql',
    credentials: 'include'
})

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link
});

export default client;