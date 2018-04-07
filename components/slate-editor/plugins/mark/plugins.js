import { isKeyHotkey } from 'is-hotkey';
import { strategy } from './utils';

const rules = {
  'mod+b': 'bold',
  'mod+`': 'code',
  'mod+i': 'italic',
  'mod+u': 'underline',
};

export default () => {
  return {
    onKeyDown(event, change) {
      const list = Object.keys(rules).map(i => ({ key: i, type: rules[i] }));
      const { type } = list.find(i => isKeyHotkey(i.key)(event)) || {};
      if (type) {
        event.preventDefault();
        strategy(change, type);
        return true;
      }
    },
  };
};
