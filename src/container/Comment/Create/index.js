import React, { Fragment } from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { withRouter } from 'next/router';
import { SAY_CREATE, SAY_LIST } from '@/graphql/schema/say';
import { useMutation } from '@/hooks/graphql';
import { Form, Field } from 'react-final-form';
import TextField from '@/components/Form/TextField';
import useStyles from './styles';

const validate = (values) => {
  const errors = {};
  if (!values.content) {
    errors.content = '评论内容不可以为空';
  }
  return errors;
};

function SayCreate({ router }) {
  const classes = useStyles();
  const params = {
    input: {
      content: '测试文本',
    },
  };

  const createSay = useMutation(SAY_CREATE, params, {
    refetchQueries: [ 'SayList' ],
  });

  return (
    <Fragment>
      <Box px={2}>
        <Form
          onSubmit={(values, form) => {
            console.log('values');
            console.log(values);
            form.reset();
          }}
          validate={validate}
          render={({ handleSubmit }) => (
            <form id="createArticleForm" onSubmit={handleSubmit}>
              <Field
                multiline
                rows="3"
                key="content"
                name="content"
                label="输入评论"
                component={TextField}
                type="text"
                margin="normal"
                variant="outlined"
                fullWidth
                placeholder="畅所欲言，回车发送"
                autoComplete="off"
                rowsMax="8"
              />
              <Box display="flex" justifyContent="space-between" alignItems="flex-start">
                <Button size="small">添加表情</Button>
                <Button type="submit" variant="contained" color="primary" className={classes.submit}>评论</Button>
              </Box>
            </form>
          )}
        />

      </Box>
    </Fragment>
  );
}

export default withRouter(SayCreate);


// 乐观更新
// optimisticResponse: { result: { status: 200, message: '创建成功11', __typename: 'Result' } },
// update: (store, { data: { result: { status } } }) => {
//   console.log('status');
//   console.log(status);
//   if (status === 200) {
//     // Read the data from our cache for this query.
//     const data = store.readQuery({ query: SAY_LIST });
//     // Add our comment from the mutation to the end.
//     data.list.push({
//       content: '测试文本22',
//       createdAt: '1560768742714',
//       user: {
//         nickname: '本王今年八岁',
//         avatarUrl: 'https://imgs.react.mobi/Fs0w36NQ9R1szSwKO3c0nIor_8m6',
//         __typename: 'User',
//       },
//       __typename: 'Say',
//       _id: '5d0770e6bd48e7125d2c5971',
//     });
//     // Write our data back to the cache.
//     store.writeQuery({ query: SAY_LIST, data });
//   }
// },
