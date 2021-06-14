import React from 'react';
import { Input } from 'antd';

import { SearchbarProps } from './types';

const { Search } = Input;

const Index: React.FC<SearchbarProps> = (props: SearchbarProps) => {
  return (
    <Search
      size="large"
      placeholder="Search a pokemon"
      enterButton="Search"
      value={props.value}
      onChange={props.onChange}
      onSearch={props.onSearch}
      loading={props.loading} />
  )
}

export default Index;
