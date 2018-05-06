import reduxWrapper from 'next-redux-wrapper';
import { configureStore } from './store';

export default function (Root) {
  return reduxWrapper(configureStore)(Root);
}
