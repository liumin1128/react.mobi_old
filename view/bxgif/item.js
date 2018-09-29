import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Link from '@/components/Link';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    cursor: 'pointer',
    margin: 0,
    padding: 0,
  },
  cover: {
    width: '100%',
    height: 0,
    display: 'block',
  },
  title: {
    color: '#666',
  },
  meta: {
    marginTop: 4,
    display: 'flex',
    justifyContent: 'space-between',
    color: '#999',
    fontSize: 12,
  },
  content: {
    padding: 16,
  },
};

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
      height,
      _id,
    } = this.props;

    return (
      <div>
        <Card className={classes.card}>
          <Link key={_id} href={`/bxgif/detail?id=${_id}`}>
            <Fragment>
              <CardMedia
                className={classes.cover}
                image={cover}
                title={title}
                style={{
                  paddingBottom: `${(height / 195) * 100}%`,
                  background: 'src',
                }}
              />
              <CardContent className={classes.content}>
                <Typography
                  className={classes.title}
                  variant="subheading"
                  component="p"
                >
                  {title.substring(15, title.length)}
                </Typography>

                <Typography className={classes.meta} color="textSecondary">
                  <span>{`${total}`}</span>
                  <span>{createdAt}</span>
                </Typography>
              </CardContent>
            </Fragment>
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
