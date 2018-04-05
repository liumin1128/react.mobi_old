import React from 'react';

export default (props) => {
  const {
    attributes, children, node, isSelected,
  } = props;
  switch (node.type) {
    case 'code':
      return <pre {...attributes}><code>{children}</code></pre>;
    case 'paragraph':
      return <p {...attributes}>{children}</p>;
    case 'quote':
      return <blockquote {...attributes}>{children}</blockquote>;
    case 'block-quote':
      return <blockquote {...attributes}>{children}</blockquote>;
    case 'ul_list':
      return <ul {...attributes}>{children}</ul>;
    case 'ol_list':
      return <ol {...attributes}>{children}</ol>;
    case 'list_item':
      return <li {...attributes}>{children}</li>;
    case 'heading':
      return <h1 {...attributes}>{children}</h1>;
    case 'bulleted-list':
      return <ul {...attributes}>{children}</ul>;
    case 'heading-one':
      return <h1 {...attributes}>{children}</h1>;
    case 'heading-two':
      return <h2 {...attributes}>{children}</h2>;
    case 'heading-three':
      return <h3 {...attributes}>{children}</h3>;
    case 'heading-four':
      return <h4 {...attributes}>{children}</h4>;
    case 'heading-five':
      return <h5 {...attributes}>{children}</h5>;
    case 'heading-six':
      return <h6 {...attributes}>{children}</h6>;
    case 'list-item':
      return <li {...attributes}>{children}</li>;
    case 'numbered-list':
      return <ol {...attributes}>{children}</ol>;
    case 'link': {
      const { data } = node;
      const href = data.get('href');
      return (
        <a href={href} {...attributes}>
          {children}
        </a>
      );
    }
    case 'image': {
      const src = node.data.get('src');
      const className = isSelected ? 'active' : null;
      const style = { display: 'block' };
      return (
        <img src={src} alt="" className={className} style={style} {...attributes} />
      );
    }
    case 'alignment': {
      let Node = 'div';
      if (node.data.get('currentBlockType') === 'grid-cell') Node = 'td';
      return (
        <Node style={{ textAlign: `${node.data.get('align')}` }}>
          {children}
        </Node>
      );
    }
    default:
      return <p {...attributes}>{children}</p>;
  }
};
