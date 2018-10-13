import React, { PureComponent, Fragment } from 'react';
// import moment from 'moment';
import { withStyles } from '@material-ui/core/styles';
import Item from './ListItem';
import { ARTICLE_LIST } from '@/graphql/schema/article';
import { listQuery } from '@/graphql/utils';

import { formatTime } from '@/utils/common';

const styles = theme => ({
  card: {
    maxWidth: 500,
    marginBottom: theme.spacing.unit * 3,
    margin: '0 auto',
  },
});

@listQuery(ARTICLE_LIST)
@withStyles(styles)
export default class test extends PureComponent {
  render() {
    const { data = {}, classes } = this.props;
    const { loading = true, error, list = [] } = data;

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    console.log('list');
    console.log(list);

    console.log(formatTime(parseInt('1538364320388', 0), 'MM月DD日'));

    return (
      <Fragment>

        {list.map(i => (
          <Item key={i._id} {...i} />
        ))}

      </Fragment>
    );
  }
}
