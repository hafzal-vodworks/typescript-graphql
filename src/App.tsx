import React from 'react';
import { ApolloProvider } from "@apollo/client";

import HomePage from './containers/HomePage/index';
import { client } from './utils';
import 'antd/dist/antd.css';
import './App.css';

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <HomePage />
    </ApolloProvider>
  );
}

export default App;
