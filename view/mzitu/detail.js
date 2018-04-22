import React, { PureComponent } from 'react';
import { Query } from 'react-apollo';
import { withStyles } from 'material-ui/styles';
import LazyLoad from 'react-lazyload';
import ContentLoader from 'react-content-loader';

import { MZITU_DETAIL } from '../../graphql/mzitu';

const styles = theme => ({
  root: {
    '& > img': {
      width: '100%',
      marginBottom: 32,
      boxShadow: '0 3px 5px 2px rgba(0, 0, 0, 0.05)',
      borderRadius: 3,
    },
  },
});
@withStyles(styles)
export default class MeizituDetail extends PureComponent {
  render() {
    const _id = this.props.query.id;
    const { classes } = this.props;
    return (<Query query={MZITU_DETAIL} variables={{ _id }}>
      {({ loading, error, data = {} }) => {
        const { detail = {} } = data;
        if (loading) return 'Loading...';
        if (error) return `Error! ${error.message}`;
        return (
          <div className={classes.root}>
            {detail.title}
            {detail.pictures.map(i =>
              (<LazyLoad
                debounce={300}
                key={i.url}
                height={i.height}
                placeholder={<ContentLoader height={300}>
                  <rect x="0" y="0" rx="2" ry="2" width="400" height="150" />
                  <rect x="0" y="160" rx="2" ry="2" width="380" height="10" />
                  <rect x="0" y="180" rx="2" ry="2" width="350" height="10" />
                </ContentLoader>}
              >
                <img src={i} alt="" />
              </LazyLoad>))}
          </div>
        );
      }}
    </Query>);
  }
}

