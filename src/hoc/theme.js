import React, { PureComponent, createContext, useReducer, useContext } from 'react';
import defaultTheme from '@/config/theme';
import darkTheme from '@/config/theme/dark';

const themes = {
  default: defaultTheme,
  dark: darkTheme,
};

export const ThemeContext = createContext(defaultTheme);

// ThemeProvider的hoc用法
export function withThemeProvider(WrappedComponent) {
  return class ThemeContextProvider extends PureComponent {
      state = {
        theme: 'dark',
      }

      setTheme = () => {
        const { theme } = this.state;
        this.setState({
          theme: theme === 'default' ? 'dark' : 'default',
        });
      }

      render() {
        const { theme } = this.state;
        return (
          <ThemeContext.Provider value={{ theme: themes[theme], setTheme: this.setTheme }}>
            <WrappedComponent {...this.props} />
          </ThemeContext.Provider>
        );
      }
  };
}

// theme的hoc用法
export function withThemeConsumer(WrappedComponent) {
  return props => (
    <ThemeContext.Consumer>
      {value => <WrappedComponent {...props} {...value} />}
    </ThemeContext.Consumer>
  );
}

// ThemeProvider的hook用法
export default function ThemeProvider({ children }) {
  function reducer(state, action) {
    switch (action.type) {
      case 'switch':
        return { theme: state.theme === 'default' ? 'dark' : 'default' };
      default:
        return state;
    }
  }
  const [ state, dispatch ] = useReducer(reducer, { count: 0 });
  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
}

// theme的hook用法
export function useTheme() {
  return useContext(ThemeContext);
}
