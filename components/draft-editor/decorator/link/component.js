import React from 'react';
import { Entity } from 'draft-js';

export default (props) => {
  const { url } = Entity.get(props.entityKey).getData();
  return (
    <a
      href={url}
      // style={{ color: 'red' }}
      // style={styles.link}
    >
      {props.children}
    </a>
  );
};
