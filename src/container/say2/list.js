import React, { PureComponent, Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { SAY_LIST } from '@/graphql/schema/dynamic';
import { listQuery } from '@/graphql/utils';
import Item from './ListItem';
import Placeholder from './Placeholder';

const styles = theme => ({
  card: {
    maxWidth: 500,
    marginBottom: theme.spacing(3),
    margin: '0 auto',
  },
});

@listQuery(SAY_LIST, { ssr: false })
@withStyles(styles)
export default class test extends PureComponent {
  render() {
    const { data = {} } = this.props;
    const { loading = true, error, list = [] } = data;

    if (loading) {
      return (
        <Fragment>
          <Placeholder />
          <div style={{ marginBottom: 16 }} />
          <Placeholder />
        </Fragment>
      );
    }
    if (error) return `Error! ${error.message}`;

    return (
      <Fragment>
        {list.map(i => (
          <Item key={i._id} {...i} />
        ))}
      </Fragment>
    );
  }
}
