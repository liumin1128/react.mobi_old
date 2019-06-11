import React, { Fragment } from 'react';
import { withRouter } from 'next/router';
import { Waypoint } from 'react-waypoint';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Loading from '@/components/Loading';
import Link from '@/components/Link';

import { NEWS_LIST } from '@/graphql/schema/news';
import { useQuery } from '@/hooks/graphql';
import { getTimeAgo } from '@/utils/common';
import useStyles from './styles';


function NewsList({ router }) {
  const classes = useStyles();

  const { search, tag, type } = router.query;
  const { data, error, loading, isLoadingMore, loadMore } = useQuery(NEWS_LIST, { search, tag, type });

  if (loading) return <Loading />;
  if (error) return <div>{error.message}</div>;

  const { list } = data;

  return (
    <Fragment>
      <List className={classes.root}>
        {list.map((i, index) => (
          <Link key={i._id} href={`/news/detail?_id=${i._id}`}>
            <ListItem button className={classes.item}>
              <ListItemText
                primary={i.title}
                secondary={getTimeAgo(i.createdAt)}
                primaryTypographyProps={{ color: 'textPrimary', variant: 'subtitle2', className: classes.title }}
              />
              <ListItemAvatar>
                <Avatar size={70} src={i.photos[0]} style={{ borderRadius: 0, width: 64, height: 64, marginLeft: 8 }} />
              </ListItemAvatar>
            </ListItem>
          </Link>
        ))}
      </List>
      {
        // isLoadingMore ? <Loading /> : <Waypoint onEnter={loadMore} />
      }
    </Fragment>
  );
}

export default withRouter(NewsList);
