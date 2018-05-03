import React, { PureComponent } from 'react';
import { Query } from 'react-apollo';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import { TODAY_IN_HISTORY } from '../../graphql/other';

const styles = theme => ({
  root: {
    paddingLeft: 64,
  },
  li: {
    borderLeft: '2px #ddd solid',
    padding: '0 16px',
    position: 'relative',
    listStyle: 'none',
  },
  time: {
    position: 'absolute',
    left: '-48px',
    top: 0,
    fontSize: 14,
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
      </Query>);
  }
}

