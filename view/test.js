import React, { PureComponent, Fragment } from 'react';
import hocNossr from '@/hoc/hocNossr';
import { BXGIF_LIST } from '@/graphql/schema/bxgif';
import { listQuery } from '@/graphql/utils';

@hocNossr(listQuery(BXGIF_LIST))
export default class test extends PureComponent {
  render() {
    const { data = {} } = this.props;
    const { loading, error, list = [] } = data;

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    return (
      <Fragment>
      666
        {list.map(i => (
          <div id={i._id}>
            {i.title}
          </div>
        ))}
      </Fragment>
    );
  }
}
