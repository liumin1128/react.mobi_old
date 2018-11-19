import React from 'react';
import { Entity } from 'draft-js';

export default ({ entityKey, children }) => {
  const { url } = Entity.get(entityKey).getData();
  return (
    <a
      href={url}
      // style={{ color: 'red' }}
      // style={styles.link}
    >
      {children}
    </a>
  );
};
