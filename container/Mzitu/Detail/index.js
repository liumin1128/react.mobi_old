import React, { PureComponent } from 'react';
import { Query } from 'react-apollo';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import LazyLoad from 'react-lazyload';
import { MZITU_DETAIL } from '@/graphql/schema/mzitu';
import imageView from '@/components/ImageView';

const styles = theme => ({
  progress: {
    margin: `${theme.spacing.unit * 2}px auto`,
    display: 'block',
    // backgroundColor: 'red',
    maxWidth: '36px',
    maxHeight: '36px',
  },
  root: {
    '& > img': {
      width: '100%',
      marginBottom: theme.spacing.unit * 2,
      cursor: 'pointer',
    },
  },
});

@withStyles(styles)
export default class MeizituDetail extends PureComponent {
  render() {
    const { classes, id } = this.props;
    return (
      <Query query={MZITU_DETAIL} variables={{ _id: id }}>
        {({ loading, error, data = {}, refetch }) => {
          const { detail = {} } = data;
          if (loading) return <CircularProgress
          color="secondary"
          className={classes.progress}
        />;
          if (error) {
            return (
              <div>
                {`Error! ${error.message}`}
                <a onClick={() => { refetch({ _id: id }); }}>refetch</a>
              </div>
            );
          }
          return (
            <div className={classes.root}>
              <h3>{detail.title}</h3>
              {detail.pictures.map(i => (
                <LazyLoad debounce={300} key={i} height={300}>
                  <img onClick={(e) => { imageView(e, i); }} src={i} alt="" />
                </LazyLoad>
              ))}
            </div>
          );
        }}
      </Query>
    );
  }
}
