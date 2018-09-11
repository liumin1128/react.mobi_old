import React, { PureComponent, Fragment } from 'react';
import Masonry from 'react-masonry-component';
import Grid from '@material-ui/core/Grid';
import hocNossr from '@/hoc/hocNossr';
import { BXGIF_LIST } from '@/graphql/schema/bxgif';
import { listQuery } from '@/graphql/utils';
import Item from './item';

@hocNossr(listQuery(BXGIF_LIST))
export default class test extends PureComponent {
  render() {
    const { data = {} } = this.props;
    const { loading = true, error, list = [] } = data;

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    return (
      <Fragment>
        <Masonry>
          {list.map(i => (
            <Grid
              key={i._id}
              style={{
                padding: '8px',
                width: '100%',
                display: 'block',
              }}
              item
              xs={6}
              sm={4}
              lg={3}
            >
              <Item {...i} />
            </Grid>
          ))}
        </Masonry>
      </Fragment>
    );
  }
}
