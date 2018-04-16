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
  card: theme.card,
  cover: {
    width: '100%',
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
        <Card className={classes.card}>
          <Link key={_id} href={`/bxgif/detail?id=${_id}`}>
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

                  <Typography className={classes.meta} color="textSecondary">
                    <span>{`${total}`}</span>
                    <span>{createdAt}</span>
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
