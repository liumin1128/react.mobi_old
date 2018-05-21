import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { withStyles } from '@material-ui/core/styles';
// import classnames from 'classnames';
import Card from '@material-ui/core/Card'; import CardHeader from '@material-ui/core/CardHeader'; import CardContent from '@material-ui/core/CardContent'; import CardMedia from '@material-ui/core/CardMedia';

import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    marginBottom: 0,
  },
  cover: {
    width: '100%',
    minHeight: 100,
    display: 'block',
  },
  title: {
    // fontSize: 16,
  },
  meta: {
    marginTop: 4,
    display: 'flex',
    justifyContent: 'space-between',
  },
  content: {
    padding: 16,
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
      cover,
      createdAt,
      total,
      _id,
    } = this.props;

    return (
      <div>
        <Card className={classes.root}>
          <Link key={_id} href={`/doyogif/detail?id=${_id}`}>
            <a>
              <div>
                <img src={cover} alt="" className={classes.cover} />
                <div className={classes.content}>
                  <Typography
                    className={classes.title}
                    // variant="headline"
                    component="p"
                  >
                    {title}
                  </Typography>
                </div>
              </div>
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
