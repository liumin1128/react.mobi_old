import React, { PureComponent } from 'react';
import { Query } from 'react-apollo';
import Typography from 'material-ui/Typography';
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
                  .map(i => (<Typography key={i._id} color="textSecondary">
                    {`${i.year}: ${i.title}`}
                  </Typography>))
              }
            </div>);
          }}
      </Query>);
  }
}

