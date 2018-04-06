export const hasBlock = (value, type) => value.blocks.some(node => node.type === type);

const DEFAULT_NODE = 'paragraph';

export const strategy = (change, type) => {
  console.log(type);
  const { value } = change;
  const { document } = value;
  // Handle everything but list buttons.
  if (type !== 'bulleted-list' && type !== 'numbered-list') {
    const isActive = hasBlock(value, type);
    const isList = hasBlock(value, 'list-item');

    if (isList) {
      change
        .setBlocks(isActive ? DEFAULT_NODE : type)
        .unwrapBlock('bulleted-list')
        .unwrapBlock('numbered-list');
    } else {
      change.setBlocks(isActive ? DEFAULT_NODE : type);
    }
  } else {
    // Handle the extra wrapping required for list buttons.
    const isList = hasBlock(value, 'list-item');
    const isType = value.blocks.some((block) => {
      return !!document.getClosest(block.key, parent => parent.type === type);
    });

    if (isList && isType) {
      change
        .setBlocks(DEFAULT_NODE)
        .unwrapBlock('bulleted-list')
        .unwrapBlock('numbered-list');
    } else if (isList) {
      change
        .unwrapBlock(type === 'bulleted-list' ? 'numbered-list' : 'bulleted-list')
        .wrapBlock(type);
    } else {
      change.setBlocks('list-item').wrapBlock(type);
    }
  }
  return change;
};
