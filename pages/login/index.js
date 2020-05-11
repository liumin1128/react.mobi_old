// import React from 'react'
import withApollo from '@/hoc/apollo'
import withLayout from '@/hoc/layout'
import Header from '@/components/Layout/Header'
import UsernameLogin from '@/Views/Login/Username'

export default withApollo(withLayout(UsernameLogin, { Header }))
