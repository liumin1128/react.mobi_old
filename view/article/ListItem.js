import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
// import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Html from '@/components/Html';
import { formatTime } from '@/utils/common';

const styles = theme => ({
  card: {
    maxWidth: 500,
    marginBottom: theme.spacing.unit * 3,
    margin: '0 auto',
  },
});

@withStyles(styles)
export default class ListItem extends PureComponent {
  state = {
    more: false,
  }

  render() {
    const { _id, title, user, createdAt, html, classes } = this.props;
    return (
      <Card key={_id} id={_id}>
        <CardHeader
          avatar={(
            <Avatar aria-label="Recipe" className={classes.avatar} src={user.avatarUrl}>
              {user.nickname}
            </Avatar>
              )}
          action={(
            <IconButton>
              <MoreVertIcon />
            </IconButton>
              )}
          title={user.nickname}
          subheader={formatTime(createdAt, 'MM月DD日')}
        />
        <CardContent>
          <Typography variant="title" component="h3">
            {title}
          </Typography>
          <Html html={html} />
        </CardContent>
      </Card>
    );
  }
}
