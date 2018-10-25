import React, { PureComponent } from 'react';
import { CREATE_COMMENT } from '@/graphql/schema/comment';
import { Mutation } from 'react-apollo';
import Snackbar from '@/components/snackbar';
import Form from './form';


export default class Create extends PureComponent {
  render() {
    const { router, _id } = this.props;
    return (
      <Mutation mutation={CREATE_COMMENT}>
        {(createComment, { loading, error, data = {} }) => {
          const onSubmit = async ({ tags, ...values }) => {
            try {
              const params = { ...values, commentTo: _id };

              console.log('params');
              console.log(params);

              const { data: { result: { status, message } } } = await createComment({
                variables: params,
                // refetchQueries: ['CommentList', 'CommentDetail'],
              });

              Snackbar.success(`[${status}]${message}`);
              router.push('/');
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
