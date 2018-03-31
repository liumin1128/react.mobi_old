import React, { PureComponent } from 'react';
import { Query } from 'react-apollo';
import { connect } from 'react-redux';
import { SAY_DETAIL } from '../../graphql/say';

@connect()
export default class SayDetail extends PureComponent {
  render() {
    const _id = this.props.query.id;
    return (<Query query={SAY_DETAIL} variables={{ _id }}>
      {({ loading, error, data: { say = {} } }) => {
        if (loading) return 'Loading...';
        if (error) return `Error! ${error.message}`;
        return (
          <div>{say.content}</div>
        );
      }}
    </Query>);
  }
}

