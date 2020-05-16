import React, { PureComponent } from 'react'
import { withApollo, WithApolloClient } from '@apollo/react-hoc'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'
// import { Mutation } from 'react-apollo'
import { USER_PHONENUMBER_CODE } from '@/graphql/schema/user'
import { isPhoneNumber } from '@/utils/validate'
// // import Snackbar from '@/components/Snackbar'
import styles from './styles'

interface CodeResponse {
  purePhoneNumber: string
  countryCode: string
}

interface Props {
  classes: {
    root: string
  }
  client: any //eslint-disable-line
  payload: CodeResponse
}

interface State {
  timer: number
  loading: boolean
}

class CodeBtn extends PureComponent<WithApolloClient<Pick<Props, 'classes' | 'payload'>>, State> {
  private timer: NodeJS.Timeout | undefined

  constructor(props: Props) {
    super(props)
    this.state = {
      timer: 0,
      loading: false,
    }
    this.timer = undefined
  }

  componentWillUnmount() {
    this.clearTimer()
  }

  reduceTimer = (timer: number) => {
    this.setState({ timer }, () => {
      if (timer > 0) {
        this.timer = setTimeout(() => this.reduceTimer(timer - 1), 1000)
      } else {
        this.clearTimer()
      }
    })
  }

  clearTimer = () => {
    if (this.timer) {
      clearTimeout(this.timer)
    }
  }

  handleGetCode = async () => {
    const { client, payload } = this.props

    this.setState({ loading: true })

    await client.mutate({
      mutation: USER_PHONENUMBER_CODE,
      variables: payload,
    })

    this.setState({ loading: false })

    this.reduceTimer(60)
  }

  public render() {
    const { classes, payload } = this.props
    const { timer, loading } = this.state

    const isPhone = isPhoneNumber(payload.countryCode, payload.purePhoneNumber)

    return (
      <Button
        size='small'
        color='secondary'
        className={classes.root}
        onClick={this.handleGetCode}
        disabled={!isPhone || timer > 0}
      >
        {loading && (
          <CircularProgress style={{ marginRight: 4 }} color='inherit' size={14} thickness={5} />
        )}
        获取验证码
        {timer > 0 && `${timer} `}
      </Button>
    )
  }
}

export default withStyles(styles)(withApollo(CodeBtn))
