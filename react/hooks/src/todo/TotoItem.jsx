import React from 'react';
import { List, Tag } from 'antd';

// 子组件
const TotoItem = (props) => {

  const onDel = (e, index) => {
    e.preventDefault();
    props.cb(index);
  } 

  return (
    <div>
      <List
        bordered
        dataSource={props.data}
        renderItem={(item, index) => (
          <List.Item key={index}>
            {item}
            <Tag closeIcon onClose={(e) => onDel(e, index)}>
              删除
            </Tag>
          </List.Item>
        )}
      />
    </div>
  );
};

export default TotoItem;