import React, { PureComponent } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import { graphql } from 'react-apollo';
import { DELETE_ARTICLE } from '@/graphql/schema/article';

@graphql(DELETE_ARTICLE)
export default class Delete extends PureComponent {
  handleClose = async () => {
    try {
      const { id, mutate } = this.props;
      const data = await mutate({ variables: { id }, refetchQueries: 'ArticleList' });
      console.log('data');
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <MenuItem
        onClick={this.handleClose}
      >
        删除
      </MenuItem>
    );
  }
}
