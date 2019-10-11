export default (contentBlock, callback, contentState) => {
  contentBlock.findEntityRanges(
    (character) => {
      const entityKey = character.getEntity();
      if (entityKey === null) return false;
      return contentState.getEntity(entityKey).getType() === 'IMAGE';
    },
    callback,
  );
};
