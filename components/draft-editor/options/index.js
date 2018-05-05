import MediaComponent from './Media';

const blockStyleFn = (block) => {
  switch (block.getType()) {
    case 'blockquote': return 'RichEditor-blockquote';
    case 'image': return 'RichEditor-image';
    default: return null;
  }
};

const customStyleMap = {
  CODE: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
    fontSize: 16,
    padding: 2,
  },
  image: {
    maxWidth: '100%',
    border: '1px red solid',
  },
};

const blockRendererFn = (block) => {
  switch (block.getType()) {
    case 'atomic': return {
      component: MediaComponent,
      editable: false,
      props: {
        foo: 'bar',
      },
    };
    default: return null;
  }
};

export default {
  blockStyleFn,
  customStyleMap,
  blockRendererFn,
};
