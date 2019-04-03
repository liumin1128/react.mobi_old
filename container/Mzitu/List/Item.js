import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Link from '@/components/Link';

const styles = () => ({
  card: {
    cursor: 'pointer',
  },
  media: {
    height: 0,
    paddingTop: '150%',
    borderRadius: 4,
    transition: 'transform 0.3s',
    '&:hover': {
      transform: 'translateY(-8px)',
    }
  },
  title: {
    fontSize: 15,
    marginTop: 8,
    color: '#666'
  }
});

class RecipeReviewCard extends PureComponent {
  render() {
    const {
      classes,
      title,
      cover = {},
      _id,
    } = this.props;

    return (
      <Link key={_id} href={`/mzitu/detail?id=${_id}`}>
        <CardMedia
          className={classes.media}
          image={cover.src}
          title={title}
        />
        <Typography
          className={classes.title}
          variant="h5"
          component="h2"
        >
          {title}
        </Typography>
      </Link>
    );
  }
}

RecipeReviewCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RecipeReviewCard);
