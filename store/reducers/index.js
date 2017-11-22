import { reducerFactory } from './default';
import common from './common';
import comment from './comment';

export default reducerFactory([
  'say',
  'user',
  'article',
  'loading',
  'navigation',
  comment,
  common,
]);
