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
        theme: defaultTheme,
      }

      render() {
        const { theme } = this.state;
        return (
          <ThemeContext.Provider
            value={{
              theme,
              setTheme: () => {
                this.setState({
                  theme: theme.background === 'white' ? fooTheme : defaultTheme,
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
