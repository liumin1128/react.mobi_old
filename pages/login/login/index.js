// import React from 'react'
import withApollo from '@/hoc/apollo'
import withLayout from '@/hoc/layout'
import Header from '@/components/Layout/Header'
import Index from '@/Container/Login/Password'

export default withApollo(withLayout(Index, { Header }))
