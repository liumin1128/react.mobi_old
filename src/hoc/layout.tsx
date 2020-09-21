import React, { PureComponent, ComponentType } from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

type Component = React.ComponentType

interface Props {
  Header?: Component
  Footer?: Component
  Sider?: Component
  maxWidth?: false | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | undefined
}

export default (WrappedComponent: Component, props?: Props) =>
  class extends PureComponent {
    render() {
      const { Header, Footer, Sider, maxWidth = 'md' } = props || {}

      return (
        <>
          {Header && <Header />}

          <Container maxWidth={maxWidth}>
            {Sider ? (
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={8}>
                  <WrappedComponent {...this.props} />
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                  <Sider />
                </Grid>
              </Grid>
            ) : (
              <WrappedComponent {...this.props} />
            )}
          </Container>

          {Footer && <Footer />}
        </>
      )
    }
  }
