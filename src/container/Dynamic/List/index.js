import React, { Fragment } from 'react'
import { Waypoint } from 'react-waypoint'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import { useQuery } from '@/hooks/graphql'
import { DYNAMIC_LIST } from '@/graphql/schema/dynamic'
import { USERINFO } from '@/graphql/schema/user'
import Loading from '@/components/Loading'
import Placeholder from '@/components/PlaceholderFigure'
import { useZan, useFollow, useDelete } from './hooks'
import Item from './Item'

function DynamicList({ variables }) {
  const {
    data: { list = [], meta },
    error,
    loading,
    loadMore,
  } = useQuery(DYNAMIC_LIST, variables)

  const {
    data: { userInfo },
  } = useQuery(USERINFO, {}, { ssr: false })

  const onZan = useZan()
  const onFollow = useFollow()
  const onDelete = useDelete()

  if (loading) return <Loading />
  if (error) return <Placeholder.Error />
  if (list.length === 0) return <Placeholder.Empty />

  return (
    <>
      {list.map(i => (
        <Fragment key={i._id}>
          <Item {...i} userInfo={userInfo} onZan={onZan} onDelete={onDelete} onFollow={onFollow} />
        </Fragment>
      ))}

      <Box>
        {list.length < meta.count ? (
          <Box>
            <Loading />
            <Waypoint onEnter={loadMore} />
          </Box>
        ) : (
          <Typography align='center' variant='caption' component='p'>
            ~ 这是人家的底线 ~
          </Typography>
        )}
      </Box>
    </>
  )
}

export default DynamicList
