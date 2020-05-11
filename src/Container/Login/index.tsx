import React from 'react'
import { useApolloClient } from '@apollo/react-hooks'
import { USER_LOGIN } from '@/graphql/schema/user'
import Button from '@material-ui/core/Button'

function Login() {
  const client = useApolloClient()
  async function test() {
    const data = await client.mutate({
      mutation: USER_LOGIN,
      variables: { username: '1111', password: '2222' },
    })
    console.log('data') // eslint-disable-line
    console.log(data) // eslint-disable-line
  }

  return (
    <>
      <Button onClick={test}>111</Button>
    </>
  )
}

export default Login
