import React, { useState } from 'react';
import { Alert } from 'antd';
import { withApollo } from '@apollo/client/react/hoc';
import { useLazyQuery } from "@apollo/client";
import SearchBar from '../../components/Searchbar';
import List from '../../components/List';
import logo from '../../logo.svg';

import { GET_POKEMON_BY_NAME } from './query';

const HomePage: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  const [getPokemonDetailsByName, { loading, data, error }] = useLazyQuery(GET_POKEMON_BY_NAME);

  const onChange = (e: any) => setSearchText(e.target.value);

  const onSearch = () => {
    if (searchText.length > 0) {
      getPokemonDetailsByName({ variables: { pokemon: searchText }});
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="comp-body">
          <SearchBar value={searchText} onChange={onChange} onSearch={onSearch} loading={loading} />
          {error && <Alert type="error" message="No pokemon found!" className="error-alert" />}
          <List data={data && [data.getPokemonDetailsByName]} />
        </div>
      </header>
    </div>
  )
}

export default withApollo(HomePage);
