import MediaComponent from './Media';

const blockStyleFn = (block) => {
  switch (block.getType()) {
    case 'blockquote': return 'RichEditor-blockquote';
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
