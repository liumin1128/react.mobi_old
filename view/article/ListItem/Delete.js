import React, { PureComponent } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import { graphql } from 'react-apollo';
import { DELETE_ARTICLE } from '@/graphql/schema/article';
import Snackbar from '@/components/snackbar';

@graphql(DELETE_ARTICLE)
export default class Delete extends PureComponent {
  handleClose = async () => {
    try {
      const { id, mutate } = this.props;
      const { data: { result: { status, message } } } = await mutate({
        variables: { id },
        refetchQueries: ['ArticleList'],
      });
      Snackbar.success(`[${status}]${message}`);
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
