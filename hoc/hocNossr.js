import { compose } from 'recompose';
import { isServerSide } from '@/utils/common';

/* eslint-disable func-names */
// export default function (...hocs) {
//   return function (Component) {
//     return isServerSide() ? Component : compose(...hocs)(Component);
//   };
// }

export default (...hocs) => Component => (isServerSide() ? Component : compose(...hocs)(Component));
/* eslint-enable func-names */
