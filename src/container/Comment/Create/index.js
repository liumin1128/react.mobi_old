import React, { Fragment, useState } from 'react';
import isEmpty from 'lodash/isEmpty';
import Box from '@material-ui/core/Box';
import { CREATE_COMMENT, COMMENT_LIST } from '@/graphql/schema/comment';
import { useMutation } from '@/hooks/graphql';
import { Form, Field } from 'react-final-form';
import TextField from '@/components/Form/TextField';
import Button from '@/components/Button/Loading';
import useStyles from './styles';


const validate = (values) => {
  const errors = {};
  if (!values.content) {
    errors.content = '评论内容不可以为空';
  }
  return errors;
};

function SayCreate({ commentTo, replyTo, session, callback }) {
  const classes = useStyles();
  const [ status, setStatus ] = useState('default');
  const createComment = useMutation(CREATE_COMMENT, { commentTo, replyTo, session }, {
    // refetchQueries: [ 'CommentList' ],
    // 乐观更新
    // optimisticResponse: {
    //   result: {
    //     status: 200,
    //     message: '创建成功',
    //     __typename: 'Result',
    //     data: {
    //       content: '测试文本22',
    //       createdAt: new Date().getTime(),
    //       user: {
    //         nickname: '本王今年八岁',
    //         avatarUrl: 'https://imgs.react.mobi/Fs0w36NQ9R1szSwKO3c0nIor_8m6',
    //         __typename: 'User',
    //       },
    //       __typename: 'Comment',
    //       commentTo: new Date().getTime(),
    //     },
    //   },
    // },
  });

  return (
    <Form
      onSubmit={(values, form) => {
        setStatus('loading');
        createComment(values, {
          update: (store, { data: { result: { status, data: result } } }) => {
            setStatus('default');
            form.reset();
            if (callback) callback();
            if (session !== commentTo) {
              if (replyTo) {
                const data = store.readQuery({ query: COMMENT_LIST, variables: { session } });
                data.list.find(i => i._id === commentTo).replys.push(result);
                store.writeQuery({ query: COMMENT_LIST, variables: { session }, data });
              } else {
                const data = store.readQuery({ query: COMMENT_LIST, variables: { session } });
                data.list.unshift(result);
                store.writeQuery({ query: COMMENT_LIST, variables: { session }, data });
              }
            }
          },
        });
      }}
      validate={validate}
      render={({ handleSubmit, errors }) => (
        <form id="createArticleForm" onSubmit={handleSubmit}>
          {
            <pre>
              {JSON.stringify({ commentTo, replyTo, session }, true, 2)}
            </pre>
            }
          <Field
            // multiline
            // rows="2"
            key="content"
            name="content"
            label="输入评论"
            component={TextField}
            type="text"
            margin="normal"
            variant="outlined"
            fullWidth
            placeholder="畅所欲言，有你更精彩"
            autoComplete="off"
            // rowsMax="8"
          />
          <Box display="flex" justifyContent="space-between" alignItems="flex-start">
            <Button size="small">添加表情</Button>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.submit}
              disabled={status === 'loading' || !isEmpty(errors)}
              loading={status === 'loading'}
            >
              评论
            </Button>
          </Box>
        </form>
      )}
    />
  );
}

export default SayCreate;
