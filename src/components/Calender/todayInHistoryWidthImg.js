import React, { PureComponent } from 'react';
import { Query } from 'react-apollo';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import moment from 'moment';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { TODAY_IN_HISTORY } from '@/graphql/other';

const styles = theme => ({
  root: {
    paddingLeft: 48,
  },
  li: {
    borderLeft: '2px #ddd solid',
    paddingLeft: 16,
    position: 'relative',
    listStyle: 'none',

  },
  time: {
    position: 'absolute',
    left: '-48px',
    top: 0,
    fontSize: 14,
  },
  dot: {
    position: 'absolute',
    width: 10,
    height: 10,
    display: 'block',
    border: '2px #ddd solid',
    left: '-6px',
    top: '5px',
    borderRadius: 10,
    background: '#fff',
    'li:hover &': {
      border: `2px ${theme.palette.primary.main} solid`,
    },
  },

  img: {
    maxWidth: '100%',
    marginTop: 8,
  },
});

@withStyles(styles)
export default class TodayInHistory extends PureComponent {
  render() {
    const { date } = this.props;
    const { classes } = this.props;
    return (
      <Card>
        <CardContent>
          <Typography variant="headline" component="h1">
            历史上的今天
          </Typography>
          <Typography className={classes.title} color="textSecondary">
            {moment().format('llll')}
          </Typography>
          <br />
          <Query
            query={TODAY_IN_HISTORY}
            variables={{ date }}
          >
            {({ loading, error, data = {} }) => {
      if (loading) return 'Loading...';
      if (error) return `Error! ${error.message}`;
      const { list = [] } = data;

      return (
        <ul className={classes.root}>
          {
            [...list]
            .sort((x, y) => { return parseInt(x.year, 0) - parseInt(y.year, 0); })
              .map(i => (<li className={classes.li}>
                <span className={classes.time}>
                  {i.year}
                </span>
                <span className={classes.dot} />
                <Typography key={i._id}>
                  {i.title}
                </Typography>
                {i.img && <img className={classes.img} src={i.img} alt="" />}

                <br />
                <br />
              </li>))
          }
        </ul>);
      }}
          </Query>
        </CardContent>

      </Card>);
  }
}

