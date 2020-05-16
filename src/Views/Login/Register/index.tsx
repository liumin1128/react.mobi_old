import React from 'react'
import { Form } from 'react-final-form'
import { TextField } from 'mui-rff'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { countryLabelValueList } from '@/utils/validate'
import PasswordStrength from '@/components/Form/Feilds/Password/PasswordStrength'
import SelectField from '@/components/Form/Feilds/Select'
import InputAdornment from '@material-ui/core/InputAdornment'
import CodeBtn from '@/components/Form/Feilds/PhoneNumber/Code'
import useStyles from './styles'
import validate from './validate'

export interface RP {
  code: string
  countryCode: string
  purePhoneNumber: string
  nickname: string
  password: string
  confirmPassword: string
}

interface Props {
  onSubmit: ({
    code,
    countryCode,
    purePhoneNumber,
    nickname,
    password,
    confirmPassword,
  }: RP) => void
}

function UsernameLogin({ onSubmit }: Props) {
  const classes = useStyles()

  return (
    <Form
      onSubmit={onSubmit}
      validate={validate}
      render={({ handleSubmit, values }) => {
        return (
          <form id='' onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs>
                <SelectField
                  fullWidth
                  key='countryCode'
                  name='countryCode'
                  label='国家'
                  className={classes.item}
                  type='text'
                  data={countryLabelValueList}
                  // native
                />
              </Grid>
              <Grid item xs={8}>
                <TextField
                  fullWidth
                  key='purePhoneNumber'
                  name='purePhoneNumber'
                  label='手机号'
                  className={classes.item}
                  type='text'
                />
              </Grid>
            </Grid>

            <TextField
              fullWidth
              key='code'
              name='code'
              label='验证码'
              className={classes.item}
              type='number'
              InputProps={{
                endAdornment: (
                  <InputAdornment variant='filled' position='end'>
                    <CodeBtn
                      payload={{
                        countryCode: values.countryCode,
                        purePhoneNumber: values.purePhoneNumber,
                      }}
                    />
                  </InputAdornment>
                ),
              }}
            />

            <TextField
              key='nickname'
              name='nickname'
              label='昵称'
              className={classes.item}
              type='text'
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
              InputProps={{
                endAdornment: values.password ? (
                  <PasswordStrength password={values.password} />
                ) : null,
              }}
              fullWidth
            />

            <TextField fullWidth name='confirmPassword' label='确认密码' type='password' />

            <Button
              variant='contained'
              size='large'
              color='primary'
              type='submit'
              className={classes.button}
              // disabled={!dirty && !valid}
              fullWidth
            >
              Register
            </Button>
          </form>
        )
      }}
    />
  )
}

export default UsernameLogin
