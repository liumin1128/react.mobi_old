import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { withStyles } from 'material-ui/styles';
// import classnames from 'classnames';
import Card, { CardHeader, CardMedia, CardContent } from 'material-ui/Card';
// import Collapse from 'material-ui/transitions/Collapse';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import red from 'material-ui/colors/red';
// import FavoriteIcon from 'material-ui-icons/Favorite';
// import ShareIcon from 'material-ui-icons/Share';
// import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import MoreVertIcon from 'material-ui-icons/MoreVert';
import timeago from '../../utils/timeago';

const styles = theme => ({
  card: {
    // maxWidth: 400,
    flexGrow: 1,
    marginBottom: 32,
    // boxShadow: '0 10px 28px 0 rgba(137,157,197,.12)',
    boxShadow: '0 10px 28px 0 rgba(137,157,197,.05)',
  },
  media: {
    height: 250,
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  flexGrow: {
    flex: '1 1 auto',
  },
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
      photos,
      desc,
      _id,
      user = {},
      createdAt,
    } = this.props;

    return (
      <div>
        <Card className={classes.card}>
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
              <CardContent>
                <Typography type="headline" component="h2">
                  {title}
                </Typography>
                <Typography component="p">
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
