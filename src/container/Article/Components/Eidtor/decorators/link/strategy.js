import { Entity } from 'draft-js';

export default (contentBlock, callback) => {
  contentBlock.findEntityRanges(
    (character) => {
      const entityKey = character.getEntity();
      return (
        entityKey !== null
        && Entity.get(entityKey).getType() === 'LINK'
      );
    },
    callback,
  );
};
