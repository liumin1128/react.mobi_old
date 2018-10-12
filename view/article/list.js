import React, { PureComponent, Fragment } from 'react';
import Html from '@/components/Html';
import { ARTICLE_LIST } from '@/graphql/schema/article';
import { listQuery } from '@/graphql/utils';

@listQuery(ARTICLE_LIST)
export default class test extends PureComponent {
  render() {
    const { data = {} } = this.props;
    const { loading = true, error, list = [] } = data;

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    return (
      <Fragment>
        {list.map(i => (
          <div key={i._id} id={i._id}>
            {i.title}
            <pre>
              {i.html}
            </pre>
            <Html html={i.html} />
          </div>
        ))}
      </Fragment>
    );
  }
}
