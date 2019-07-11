import React, { useState } from 'react';
import { SAY_CREATE, SAY_LIST } from '@/graphql/schema/dynamic';
import { useMutation } from '@/hooks/graphql';
import Snackbar from '@/components/Snackbar';
import Form from './Form';

function CommentCreate({ commentTo, replyTo, session, callback, autoFocus }) {
  const [ status, setStatus ] = useState('default');
  const createComment = useMutation(SAY_CREATE, { commentTo, replyTo, session }, {});


  return (
    <Form
      onSubmit={(values, form) => {
        console.log('values');
        console.log(values);
        setStatus('loading');
        // createComment(values, {
        //   update: (store, { data: { result: { status: code, message, data: result } } }) => {
        //     setStatus('default');
        //     if (callback) callback();
        //     if (code === 200) {
        //       if (form) form.reset();
        //       const data = store.readQuery({ query: SAY_LIST, variables: { session } });
        //       data.list.unshift(result);
        //       data.meta.count += 1;
        //       store.writeQuery({ query: SAY_LIST, variables: { session }, data });
        //     } else {
        //       Snackbar.error(message);
        //     }
        //   },
        // });
      }}
      status={status}
      autoFocus={autoFocus}
    />
  );
}

export default CommentCreate;
