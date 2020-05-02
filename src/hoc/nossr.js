import React, { PureComponent } from 'react'
import { isServerSide } from '@/utils/common'

export default WrappedComponent =>
  class NossrComponent extends PureComponent {
    constructor(props) {
      super(props)
      this.state = {
        show: false,
        skip: false,
      }
    }

    componentDidMount() {
      this.change()
    }

    change = () => {
      const { skip } = this.state
      if (!skip && !isServerSide()) {
        this.setState({ show: true, skip: true })
      }
    }

    render() {
      const { ...other } = this.props
      const { show } = this.state
      if (!show) {
        return null
      }
      return <WrappedComponent {...other} />
    }
  }
