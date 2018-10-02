import React from 'react';
import { Entity } from 'draft-js';

export default (props) => {
  const { src } = Entity.get(props.entityKey).getData();
  return (
    <img className="image" src={src} alt="" />
  );
};
