import { reducerFactory } from './default';
import common from './common';

export default reducerFactory([
  common,
  'say',
  'user',
  'article',
  'comment',
  'loading',
  'navigation',
]);
