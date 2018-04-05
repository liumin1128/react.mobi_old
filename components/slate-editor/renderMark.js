import React from 'react';

export default (props) => {
  const { children, mark } = props;
  switch (mark.type) {
    case 'bold':
      return <strong>{children}</strong>;
    case 'code':
      return <code>{children}</code>;
    case 'italic':
      return <em>{children}</em>;
    case 'strikethrough':
      return <del>{children}</del>;
    case 'underline':
      return <u>{children}</u>;
    default: return <p>{children}</p>;
  }
};
