import { CompositeDecorator } from 'draft-js';
import findLinkEntities from './link/strategy';
import Link from './link/component';

export default new CompositeDecorator([
  {
    strategy: findLinkEntities,
    component: Link,
  },
]);
