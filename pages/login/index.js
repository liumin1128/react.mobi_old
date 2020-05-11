import React from 'react'
import withApollo from '@/hoc/apollo'
import withLayout from '@/hoc/layout'
import Header from '@/components/Layout/Header'

const Index = () => <>111</>

export default withApollo(withLayout(Index, { Header }))
