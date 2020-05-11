import React from 'react'
import { Form } from 'react-final-form'
import { TextField } from 'mui-rff'
import Button from '@material-ui/core/Button'
// import TextField from '@material-ui/core/TextField'
import useStyles from './styles'
import validate from './validate'

function UsernameLogin() {
  const classes = useStyles()

  return (
    <Form
      onSubmit={values => {
        console.log('values') // eslint-disable-line
        console.log(values) // eslint-disable-line
      }}
      validate={validate}
      render={({ handleSubmit }) => {
        return (
          <form id='' onSubmit={handleSubmit}>
            <TextField
              key='username'
              name='username'
              label='Username'
              placeholder='请输入手机号或邮箱'
              className={classes.item}
              type='text'
              // autoComplete="new-password"
              fullWidth
            />

            <TextField
              key='password'
              name='password'
              label='Password'
              // placeholder="保证不偷看"
              className={classes.item}
              type='password'
              autoComplete='new-password'
              fullWidth
            />

            <Button
              variant='contained'
              size='large'
              color='primary'
              type='submit'
              className={classes.button}
              // disabled={!dirty && !valid}
              fullWidth
            >
              Login
            </Button>
          </form>
        )
      }}
    />
  )
}

export default UsernameLogin
