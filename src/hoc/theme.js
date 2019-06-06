import React, { PureComponent, createContext } from 'react';


const defaultTheme = {
  background: 'white',
  color: 'black',
};

const fooTheme = {
  background: 'red',
  color: 'green',
};

export const ThemeContext = createContext(defaultTheme);

export function withTheme(WrappedComponent) {
  return props => (
    <ThemeContext.Consumer>
      {value => <WrappedComponent {...props} theme={value} />}
    </ThemeContext.Consumer>
  );
}
