import { isKeyHotkey } from 'is-hotkey';
import { alignmentMarkStrategy } from './utils';

const rules = {
  'mod+l': 'left',
  'mod+c': 'center',
  'mod+r': 'right',
};

export default () => {
  return {
    onKeyDown(event, change) {
      const list = Object.keys(rules).map(i => ({ key: i, type: rules[i] }));
      const { type } = list.find(i => isKeyHotkey(i.key)(event)) || {};
      if (type) {
        event.preventDefault();
        alignmentMarkStrategy(change, type);
        return true;
      }
    },
  };
};
