import React, { PureComponent, Fragment } from 'react';
import { graphql } from 'react-apollo';

@graphql(ARTICLE_LIST)
export default class test extends PureComponent {
  render() {
    const { loading, error, list, meta } = data;

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    return (<Fragment>
      {list.map(i => <div id={i._id}>
        {i.title}
      </div>)}
    </Fragment>);
  }
}
