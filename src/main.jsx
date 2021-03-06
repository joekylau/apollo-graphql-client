import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider
} from '@apollo/client'
import './index.css'
import 'semantic-ui-css/semantic.min.css'
import App from './App'

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
});

// Wire up apollo client by ApolloProvider
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
