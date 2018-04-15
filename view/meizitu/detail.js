import React, { PureComponent } from 'react';
import { Query } from 'react-apollo';
import { MEIZITU_DETAIL } from '../../graphql/meizitu';

export default class MeizituDetail extends PureComponent {
  render() {
    const _id = this.props.query.id;
    return (<Query query={MEIZITU_DETAIL} variables={{ _id }}>
      {({ loading, error, data = {} }) => {
        const { detail = {} } = data;
        if (loading) return 'Loading...';
        if (error) return `Error! ${error.message}`;
        return (
          <div>
            {detail.title}
            {detail.pictures.map(i => <img src={i} alt="" />)}
          </div>
        );
      }}
    </Query>);
  }
}

