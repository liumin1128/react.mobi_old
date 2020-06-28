import React, { PureComponent } from 'react'
import Dialog from '@material-ui/core/Dialog'
import Slide from '@material-ui/core/Slide'
import { domRender } from '@/utils/react'
// import withStyle from '@/hoc/material-ui'
// import withThemeConsumer from '@/hoc/theme/withThemeConsumer'
import { TransitionProps } from '@material-ui/core/transitions'
import { ThemeProvider } from '@/hoc/theme'

const Transition = React.forwardRef(function Transition(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>
) {
  return <Slide direction='up' ref={ref} {...props} />
})

interface CreateModalProps {
  fullScreen?: boolean
}

interface ModalProps {
  destory: () => void
}

interface ModalState {
  open: boolean
}

export default function createModal(
  WrappedComponent: React.ComponentType<{ close: () => void }>,
  createModalProps?: CreateModalProps
) {
  // @withThemeConsumer
  @domRender
  class Modal extends PureComponent<ModalProps, ModalState> {
    constructor(props: ModalProps) {
      super(props)
      this.state = {
        open: true,
      }
    }

    handleClose = () => {
      this.setState({ open: false })
    }

    handleExited = () => {
      const { destory } = this.props
      if (destory) destory()
    }

    render() {
      const { open } = this.state
      return (
        <ThemeProvider>
          <Dialog
            keepMounted
            open={open}
            TransitionComponent={Transition}
            onClose={this.handleClose}
            onExited={this.handleExited}
            {...createModalProps}
          >
            <WrappedComponent close={this.handleClose} />
          </Dialog>
        </ThemeProvider>
      )
    }
  }

  return Modal
}
