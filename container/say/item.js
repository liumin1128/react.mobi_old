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
      classes, title, content, photos, desc, _id, user = {}, createdAt,
    } = this.props;

    console.log('user');
    console.log(user);

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
          <Link
            key={_id}
            href={`/say/detail?id=${_id}`}
          ><a>
            {this.props.photos[0] && <CardMedia
              className={classes.media}
              image={this.props.photos[0]}
              title="Contemplative Reptile"
            />}
            <CardContent>
              <Typography type="headline" component="h2">
                {title}
              </Typography>
              <Typography component="p">
                {desc || `${content.replace(/<[^>]+>/g, '').substring(0, 150)}......`}
              </Typography>
            </CardContent>
          </a></Link>

          {
          //   <CardActions disableActionSpacing>
          //   <IconButton aria-label="Add to favorites">
          //     <FavoriteIcon />
          //   </IconButton>
          //   <IconButton aria-label="Share">
          //     <ShareIcon />
          //   </IconButton>
          //   <div className={classes.flexGrow} />
          //   <IconButton
          //     className={classnames(classes.expand, {
          //       [classes.expandOpen]: this.state.expanded,
          //     })}
          //     onClick={this.handleExpandClick}
          //     aria-expanded={this.state.expanded}
          //     aria-label="Show more"
          //   >
          //     <ExpandMoreIcon />
          //   </IconButton>
          // </CardActions>
          //   <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          //   <CardContent>
          //     <Typography paragraph type="body2">
          //       Method:
          //     </Typography>
          //     <Typography paragraph>
          //       Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
          //       minutes.
          //     </Typography>
          //     <Typography paragraph>
          //       Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
          //       heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
          //       browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving
          //       chicken and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion,
          //       salt and pepper, and cook, stirring often until thickened and fragrant, about 10
          //       minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          //     </Typography>
          //     <Typography paragraph>
          //       Add rice and stir very gently to distribute. Top with artichokes and peppers, and
          //       cook without stirring, until most of the liquid is absorbed, 15 to 18 minutes.
          //       Reduce heat to medium-low, add reserved shrimp and mussels, tucking them down into
          //       the rice, and cook again without stirring, until mussels have opened and rice is
          //       just tender, 5 to 7 minutes more. (Discard any mussels that don’t open.)
          //     </Typography>
          //     <Typography>
          //       Set aside off of the heat to let rest for 10 minutes, and then serve.
          //     </Typography>
          //   </CardContent>
          // </Collapse>
        }
        </Card>
      </div>
    );
  }
}

RecipeReviewCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RecipeReviewCard);
