import React from 'react'
import { useApolloClient } from '@apollo/react-hooks'
import { USER_REGISTER } from '@/graphql/schema/user'
// import Button from '@material-ui/core/Button'
import Form, { RP } from '@/Views/Login/Register'

function Login() {
  const client = useApolloClient()
  async function test(rp: RP) {
    const data = await client.mutate({
      mutation: USER_REGISTER,
      variables: rp,
    })
    console.log('data') // eslint-disable-line
    console.log(data) // eslint-disable-line
  }

  return (
    <>
      <Form onSubmit={test} />
    </>
  )
}

export default Login
