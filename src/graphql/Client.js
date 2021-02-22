import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { RestLink } from 'apollo-link-rest'

const restLink = new RestLink({
    uri: 'https://min-api.cryptocompare.com',
    headers: {
      Authorization:
        '955ead040c492eb581fe537f88f6566527199012129092682cd74598c14d6c3f'
    }
  });

  export const client = new ApolloClient({
    link: restLink,
    cache: new InMemoryCache()
  });