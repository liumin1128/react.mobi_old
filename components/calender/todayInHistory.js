import React, { PureComponent } from 'react';
import { Query } from 'react-apollo';
import { TODAY_IN_HISTORY } from '../../graphql/other';

export default class TodayInHistory extends PureComponent {
  render() {
    const { date } = this.props;
    return (
      <Query
        query={TODAY_IN_HISTORY}
        variables={{ date }}
      >
        {({ loading, error, data = {} }) => {
          if (loading) return 'Loading...';
          if (error) return `Error! ${error.message}`;
          const { list = [] } = data;

          return (
            <div>
              {
                [...list]
                .sort((x, y) => { return parseInt(x.year, 0) - parseInt(y.year, 0); })
                  .map(i => (<div key={i._id}>
                    {`${i.year}:${i.title}`}
                  </div>))
              }
            </div>);
          }}
      </Query>);
  }
}

