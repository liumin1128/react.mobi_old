import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Dialog from '@material-ui/core/Dialog'
import Slide from '@material-ui/core/Slide'
import { domRender } from '@/utils/react'
import withStyle from '@/hoc/material-ui'

function Transition(props) {
  return <Slide direction='up' {...props} />
}

export default function (WrappedComponent, modalProps) {
  @domRender
  @withStyle
  class Modal extends PureComponent {
    constructor(props) {
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

  Modal.propTypes = {
    destory: PropTypes.func.isRequired,
  }

  Modal.defaultProps = {}

  return Modal
}
