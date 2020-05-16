// import React from 'react'
import withApollo from '@/hoc/apollo'
import withLayout from '@/hoc/layout'
import Header from '@/components/Layout/Header'
import Index from '@/Container/Login/Register'

export default withApollo(withLayout(Index, { Header }))
