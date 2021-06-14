import React from 'react';
import { List, Avatar } from 'antd';

import { ListComponentProps } from './types';

const Index: React.FC<ListComponentProps> = (props: ListComponentProps) => {
  return (
    <List
      itemLayout="horizontal"
      dataSource={props.data}
      renderItem={(item: any) => (
        <List.Item>
          <List.Item.Meta
            avatar={<Avatar src={item.sprite} />}
            title={item.species}
            description={`Weight: ${item.weight}, Height: ${item.height}`}
          />
        </List.Item>
      )}
    />
  )
}

export default Index;
