import React, { PureComponent } from 'react';
import { Query } from 'react-apollo';
import Grid from 'material-ui/Grid';
import Item from './item';
import { MZITU_LIST } from '../../graphql/mzitu';
import { updateQuery } from '../../graphql/index';

// @withStyles(styles)
export default class MeizituDetail extends PureComponent {
  render() {
    const { query = {} } = this.props;
    const { search, tag } = query;
    return (
      <Query
        query={MZITU_LIST}
        variables={{ search, tag }}
      >
        {({ loading, error, data = {}, fetchMore }) => {
        if (loading) return 'Loading...';
        if (error) return `Error! ${error.message}`;

        const { list = [] } = data;

        const loadMore = () => fetchMore({
          variables: {
            page: (Math.floor(list.length / 24) || 1) + 1,
            search,
          },
          updateQuery,
        });

        return (
          <div>
            <Grid container spacing={24}>
              {
                list.map(i => (<Grid
                  item
                  xs={6}
                  sm={4}
                  md={4}
                >
                  <Item key={i._id} {...i} />
                </Grid>))
              }
            </Grid>
            {
              <button onClick={loadMore}>
                {loading ? 'Loading...' : 'Show More'}
              </button>
            }
          </div>
        );
      }}
      </Query>);
  }
}

