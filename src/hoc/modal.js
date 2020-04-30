import React, { PureComponent } from 'react'
import Dialog from '@material-ui/core/Dialog'
import Slide from '@material-ui/core/Slide'
import withStyle from './material-ui'
import { domRender } from '@/utils/react'

function Transition(props) {
  return <Slide direction='up' {...props} />
}

export default function (WrappedComponent, modalProps) {
  @domRender
  @withStyle
  class Modal extends PureComponent {
    state = {
      open: true,
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
        <div>
          <Dialog
            keepMounted={false}
            open={open}
            TransitionComponent={Transition}
            onClose={this.handleClose}
            onExited={this.handleExited}
            {...modalProps}
          >
            <WrappedComponent close={this.handleClose} />
          </Dialog>
        </div>
      )
    }
  }
  return Modal
}
