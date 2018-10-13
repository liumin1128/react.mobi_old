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
  content: {
    cursor: 'pointer',
  },
});

@withStyles(styles)
export default class ListItem extends PureComponent {
  state = {
    showMore: false,
  }

  switch = () => {
    const { showMore } = this.state;
    this.setState({
      showMore: !showMore,
    });
  }

  render() {
    const { _id, title, user, createdAt, html, classes } = this.props;
    const { showMore } = this.state;
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
        {
          showMore
            ? (
              <CardContent>
                <Typography className={classes.title} variant="title" component="h3">
                  {title}
                </Typography>
                <Html html={html} />
              </CardContent>
            )
            : (
              <CardContent onClick={this.switch} className={classes.content}>
                <Typography className={classes.title} variant="title" component="h3">
                  {title}
                </Typography>
                <Typography>
                  <p>
                    {`${html
                      .replace(/<[^>]+>/g, '')
                      .substring(0, 150)}......`}
                  </p>
                </Typography>
              </CardContent>
            )
        }

      </Card>
    );
  }
}
