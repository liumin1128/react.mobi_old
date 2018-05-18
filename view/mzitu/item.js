import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { withStyles } from ’@material-ui/corestyles';
// import classnames from 'classnames';
import Card, { CardHeader, CardMedia, CardContent } from ’@material-ui/coreCard';
// import Collapse from ’@material-ui/coretransitions/Collapse';
import Typography from ’@material-ui/coreTypography';
import red from ’@material-ui/corecolors/red';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import ShareIcon from '@material-ui/icons/Share';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const styles = theme => ({
  media: {
    // height: 300,
    height: 0,
    paddingTop: '150%',
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
  title: {
    fontSize: 16,
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
      cover = {},
      _id,
    } = this.props;

    return (
      <div>
        <Card className={classes.card}>
          <Link key={_id} href={`/mzitu/detail?id=${_id}`}>
            <a>
              <CardMedia
                className={classes.media}
                image={cover.src}
                title={title}
              />
              <CardContent>
                <Typography
                  className={classes.title}
                  variant="headline"
                  component="h2"
                >
                  {title}
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
