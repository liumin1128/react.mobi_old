import React from 'react';
import { Entity } from 'draft-js';

export default ({ entityKey }) => {
  const { src } = Entity.get(entityKey).getData();
  return (
    <img className="image" src={src} alt="" />
  );
};
