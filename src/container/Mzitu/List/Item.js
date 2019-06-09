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
    backgroundColor: 'rgba(0,0,0,0.03)',
    marginBottom: 8
  },
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
        <CardMedia className={classes.media} image={cover.src} title={title}/>
        <Typography variant="subtitle1" color="textPrimary">{title}</Typography>
      </Link>
    );
  }
}

RecipeReviewCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RecipeReviewCard);
