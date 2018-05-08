import { compose } from 'recompose';
import styleRoot from './styleRoot';
import apolloRoot from './apolloRoot';
import reduxRoot from './reduxRoot';
import { queryProvider } from './getQuery';
import { modalProvider } from './widthModal';

export default compose(
  reduxRoot,
  apolloRoot,
  styleRoot,
  queryProvider,
  modalProvider,
);
