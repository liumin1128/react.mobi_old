import React, { PureComponent, Fragment } from 'react';
import hocNossr from '@/hoc/hocNossr';
import { ARTICLE_LIST } from '@/graphql/schema/article';
import { listQuery } from '@/graphql/utils';

@hocNossr(listQuery(ARTICLE_LIST))
export default class test extends PureComponent {
  render() {
    const { data = {} } = this.props;
    const { loading = true, error, list = [] } = data;

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    return (
      <Fragment>
        {list.map(i => (
          <div id={i._id}>
            {i.title}
            <pre>
              {i.content}
            </pre>
          </div>
        ))}
      </Fragment>
    );
  }
}
