import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { withStyles } from 'material-ui/styles';
import Card, { CardMedia, CardContent, CardActions } from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import red from 'material-ui/colors/red';
// import ShareIcon from 'material-ui-icons/Share';
import FavoriteIcon from 'material-ui-icons/Favorite';
import EyeIcon from 'material-ui-icons/RemoveRedEye';
import CommentIcon from 'material-ui-icons/Comment';
import timeago from '../../utils/timeago';

const styles = theme => ({
  card: {
    flexGrow: 1,
    marginBottom: 32,
    boxShadow: '0 10px 28px 0 rgba(137,157,197,.12)',
  },
  media: {
    height: 250,
    borderRadius: '3px 3px 0 0',
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
    margin: '4px 0 12px 0',
  },
  content: {
    color: '#666',
    fontSize: 16,
    wordBreak: 'break-all',
  },
  action: {
    color: '#999',
    fontSize: 14,
    marginRight: 8,
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    color: '#999',
    fontSize: 18,
  },
});

@withStyles(styles)
export default class extends PureComponent {
  static propTypes = {
    classes: PropTypes.object.isRequired,
  };

  state = { expanded: false };

  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  render() {
    const {
      classes, title, content, cover, desc, _id, user = {}, createdAt,
      zanCount, readCount, commentCount,
    } = this.props;

    return (
      <div>
        <Card className={classes.card}>

          <Link
            key={_id}
            href={`/news/detail?id=${_id}`}
          ><a>
            {cover && <CardMedia
              className={classes.media}
              image={`${cover}?imageMogr2/format/jpg/size-limit/100k!`}
              title={title}
              alt={title}
            />}
            <CardContent style={{ paddingBottom: 0 }}>
              <Typography className={classes.title} type="headline" component="h2">
                {title}
              </Typography>
              <Typography className={classes.content} component="p">
                {desc || `${content
                  .replace(/&nbsp;/ig, '')
                  .replace(/<[^>]+>/g, '')
                  .substring(0, 140)}......`}
              </Typography>
            </CardContent>
          </a></Link>
          <CardActions disableActionSpacing>
            <div className={classes.action}>
              <IconButton aria-label="Add to favorites">
                <FavoriteIcon className={classes.icon} />
              </IconButton>
              {zanCount || '0'}
            </div>
            <div className={classes.action}>
              <IconButton aria-label="Share">
                <EyeIcon className={classes.icon} />
              </IconButton>
              {readCount}
            </div>
            <div className={classes.action}>
              <IconButton aria-label="Share">
                <CommentIcon className={classes.icon} />
              </IconButton>
              {commentCount}
            </div>
            <div className={classes.flexGrow} />
            <div className={classes.action}>
              {timeago(createdAt)}
            </div>
          </CardActions>
        </Card>
      </div>
    );
  }
}
