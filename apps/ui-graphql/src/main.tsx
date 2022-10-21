import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { globalStyles } from 'design-system';
import ReactDOM from 'react-dom/client';
import App from './App';

globalStyles();

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
