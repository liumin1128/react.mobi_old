import React from 'react'
import { useApolloClient } from '@apollo/react-hooks'
import { USER_LOGIN } from '@/graphql/schema/user'
// import Button from '@material-ui/core/Button'
import Form, { UP } from '@/Views/Login/Username'
import Oauth from '@/Views/Login/Oauth'

function Login() {
  const client = useApolloClient()

  async function test(up: UP) {
    try {
      const data = await client.mutate({
        mutation: USER_LOGIN,
        variables: up,
      })
      console.log('data', data) // eslint-disable-line
    } catch (error) {
      console.log('error', error) // eslint-disable-line
    }
  }

  return (
    <>
      <Form onSubmit={test} />
      <Oauth />
    </>
  )
}

export default Login
