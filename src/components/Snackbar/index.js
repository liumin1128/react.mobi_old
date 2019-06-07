import Container from './container';

const snackbar = Object.assign(
  (text, option) => Container({ message: text, ...option }),
  {
    error: (text, option) => Container({ message: text, type: 'error', ...option }),
    success: (text, option) => Container({ message: text, type: 'success', ...option }),
    info: (text, option) => Container({ message: text, type: 'info', ...option }),
    warn: (text, option) => Container({ message: text, type: 'warn', ...option }),
  },
);

export default snackbar;
