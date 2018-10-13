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
  title: {
    fontSize: '1.1em',
  },
});

@withStyles(styles)
export default class ListItem extends PureComponent {
  state = {
    more: false,
  }

  render() {
    const { _id, title, user, createdAt, html, classes } = this.props;
    const { more } = this.state;
    return (
      <Card key={_id} id={_id}>
        <CardHeader
          avatar={(
            <Avatar
              aria-label="Recipe"
              className={classes.avatar}
              src={user.avatarUrl}
            >
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
          <Typography className={classes.title} gutterBottom variant="title" component="h3">
            {title}
          </Typography>
          {more
            ? <Html html={html} />
            : (<Typography>
              {`${html
                .replace(/<[^>]+>/g, '')
                .substring(0, 150)}......`}
            </Typography>
            )}
        </CardContent>
      </Card>
    );
  }
}
