import React, { Fragment } from 'react';
import { withRouter } from 'next/router';
import { Waypoint } from 'react-waypoint';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';

import Link from '@/components/Link';
import Loading from '@/components/Loading';
import { NEWS_LIST } from '@/graphql/schema/news';
import { useQuery } from '@/hooks/graphql';
import { getStrFromHtml } from '@/utils/common';
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
          <ListItem button key={i._id} style={{ padding: 0 }}>
            <ListItemAvatar>
              <Avatar size={70} src={i.photos[0]} style={{ borderRadius: 0, width: 64, height: 64, marginRight: 8 }} />
            </ListItemAvatar>
            <ListItemText
              // secondary={i.title}
              primary={i.title}
              // secondary={getStrFromHtml(i.content, 20)}
              secondary={i.createdAt}
              // primaryTypographyProps={{ noWrap: true, style: { overflow: 'hidden' } }}
            />
          </ListItem>
        ))}
      </List>

      {isLoadingMore ? <Loading /> : <Waypoint onEnter={loadMore} />}
    </Fragment>
  );
}

export default withRouter(NewsList);
