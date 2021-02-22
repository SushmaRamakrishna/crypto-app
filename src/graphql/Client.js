import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { RestLink } from 'apollo-link-rest'

const restLink = new RestLink({
    uri: 'https://min-api.cryptocompare.com',
    headers: {
      Authorization:
        'Add your Auth Key'
    }
  });

  export const client = new ApolloClient({
    link: restLink,
    cache: new InMemoryCache()
  });
