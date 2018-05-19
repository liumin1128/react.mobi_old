import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { withStyles } from '@material-ui/core/styles';
// import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import Collapse from '@material-ui/core/transitions/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import ShareIcon from '@material-ui/icons/Share';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import timeago from '@/utils/timeago';

const styles = theme => ({
  // card: { marginBottom: theme.spacing.unit * 3 },
  // media: {
  //   paddingTop: '38%',
  // },
  // avatar: {
  //   backgroundColor: red[500],
  // },
  // header: {
  //   paddingBottom: 0,
  // },
  // flexGrow: {
  //   flex: '1 1 auto',
  // },
  // title: {
  //   fontSize: 16,
  //   marginBottom: 8,
  // },
});

class RecipeReviewCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  render() {
    const {
      classes,
      title,
      content,
      cover,
      photos,
      desc,
      _id,
      user = {},
      createdAt,
    } = this.props;

    return (
      <div>
        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image={cover}
            style={{ paddingTop: cover ? '38%' : 0 }}
          />
          <CardHeader
            avatar={
              <Avatar
                aria-label={(user || {}).nickname}
                className={classes.avatar}
                src={(user || {}).avatarUrl}
              />
            }
            action={
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            }
            title={(user || {}).nickname}
            subheader={timeago(createdAt)}
            className={classes.header}
          />
          <Link key={_id} href={`/article/detail?id=${_id}`}>
            <a>
              {
              //   this.props.photos[0] && (
              //   <CardMedia
              //     className={classes.media}
              //     // image={this.props.photos[0]}
              //     title="Contemplative Reptile"
              //   />
              // )
            }
              <CardContent >
                <Typography className={classes.title} component="h2">
                  {title}
                </Typography>
                <Typography component="p" color="textSecondary">
                  {desc ||
                    `${content
                      .replace(/<[^>]+>/g, '')
                      .substring(0, 150)}......`}
                </Typography>
              </CardContent>
            </a>
          </Link>
        </Card>
      </div>
    );
  }
}

RecipeReviewCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RecipeReviewCard);
