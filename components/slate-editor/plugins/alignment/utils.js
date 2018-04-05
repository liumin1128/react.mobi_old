export const hasMark = value => value.blocks.some(node => node.type === 'alignment');
export const getMark = value => value.blocks.find(node => node.type === 'alignment');
export const getType = value => value.blocks.first().type;

export const alignmentMarkStrategy = (change, align) => {
  console.log('change.value.blocks');

  console.log(change.value.blocks.map(node => console.log(node)));
  if (hasMark(change.value)) {
    console.log('hasMarkxxxxxxxxxxxxxxxxxxx');
    console.log('hasMarkxxxxxxxxxxxxxxxxxxx');
    console.log('hasMarkxxxxxxxxxxxxxxxxxxx');
    console.log('hasMarkxxxxxxxxxxxxxxxxxxx');
    console.log('hasMarkxxxxxxxxxxxxxxxxxxx');
    const { data } = getMark(change.value);
    const _align = data.get('align');
    if (_align === align) {
      const _currentBlockType = data.get('currentBlockType');
      return change
        .unwrapBlock({
          type: 'alignment',
        })
        .focus();
    } else {
      return change
        .setBlocks({
          // type: 'alignment',
          data: {
            align,
          },
        })
        .focus();
    }
  }
  return change
    .wrapBlock({
      type: 'alignment',
      data: {
        align,
        currentBlockType: getType(change.value),
      },
    })
    .focus();
};
