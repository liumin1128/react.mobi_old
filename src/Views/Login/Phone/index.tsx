import React from 'react'
import { Form } from 'react-final-form'
import { TextField } from 'mui-rff'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import InputAdornment from '@material-ui/core/InputAdornment'
import SelectField from '@/components/Form/Feilds/Select'
import CodeBtn from './Code'
import countrys from './countrys'
import useStyles from './styles'
import validate from './validate'

const countryCodeList = countrys.map(i => ({ value: i.code, label: i.name, key: i.abbr }))

export interface UP {
  countryCode: string
  purePhoneNumber: string
  code: string
}

interface Props {
  onSubmit: ({ countryCode, purePhoneNumber, code }: UP) => void
}

function UsernameLogin({ onSubmit }: Props) {
  const classes = useStyles()

  return (
    <Form
      onSubmit={onSubmit}
      validate={validate}
      initialValues={{ countryCode: '+86', purePhoneNumber: '18629974148', code: '' }}
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
                  data={countryCodeList}
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
