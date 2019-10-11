import { CompositeDecorator } from 'draft-js';
import findLinkEntities from './link/strategy';
import Link from './link/component';
import findImageEntities from './image/strategy';
import Image from './image/component';

export default new CompositeDecorator([
  {
    strategy: findLinkEntities,
    component: Link,
  },
  {
    strategy: findImageEntities,
    component: Image,
  },
]);
