import React, { PureComponent } from 'react';
import { CREATE_COMMENT } from '@/graphql/schema/comment';
import { Mutation } from 'react-apollo';
import Snackbar from '@/components/snackbar';
import Form from './form';


export default class Create extends PureComponent {
  render() {
    const { _id, refetch } = this.props;
    return (
      <Mutation mutation={CREATE_COMMENT}>
        {(createComment, { loading, error, data = {} }) => {
          const onSubmit = async ({ content }) => {
            try {
              if (!content) return;
              const params = { content, commentTo: _id };
              const { data: { result: { status, message } } } = await createComment({
                variables: params,
                refetchQueries: [ 'ArticleList' ],
                // awaitRefetchQueries: true,
              });

              if (status === 200) {
                refetch();
              } else {
                Snackbar.success(`[${status}]${message}`);
              }
            } catch (err) {
              console.log('err');
              console.log(err);
              // Snackbar.error('文章发布失败');
            }
          };
          return <Form onSubmit={onSubmit} />;
        }}
      </Mutation>
    );
  }
}