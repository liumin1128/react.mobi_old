import React, { PureComponent, createContext } from 'react';
import defaultTheme from '@/config/theme';
import darkTheme from '@/config/theme/dark';

const themes = {
  default: defaultTheme,
  dark: darkTheme,
};

export const ThemeContext = createContext(defaultTheme);


// 一个方便操作的hoc，直接传进theme
export function withThemeConsumer(WrappedComponent) {
  return props => (
    <ThemeContext.Consumer>
      {value => <WrappedComponent {...props} {...value} />}
    </ThemeContext.Consumer>
  );
}

export function withThemeProvider(WrappedComponent) {
  return class ThemeContextProvider extends PureComponent {
      state = {
        theme: 'default',
      }

      render() {
        const { theme } = this.state;
        return (
          <ThemeContext.Provider
            value={{
              theme: themes[theme],
              setTheme: () => {
                this.setState({
                  theme: theme === 'default' ? 'dark' : 'default',
                });
              },
            }}
          >
            <WrappedComponent {...this.props} />
          </ThemeContext.Provider>
        );
      }
  };
}
