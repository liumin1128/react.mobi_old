import React, { useState } from 'react';
import { DYNAMIC_CREATE, DYNAMIC_LIST } from '@/graphql/schema/dynamic';
import { useMutation } from '@/hooks/graphql';
import Snackbar from '@/components/Snackbar';
import Form from './Form';

function DynamicCreate({ commentTo, replyTo, session, callback, autoFocus }) {
  const [ status, setStatus ] = useState('default');
  const createDynamic = useMutation(DYNAMIC_CREATE, { commentTo, replyTo, session }, {});
  return (
    <Form
      onSubmit={(values, form) => {
        setStatus('loading');
        createDynamic({ input: values }, {
          update: (store, { data: { result: { status: code, message, data: result } } }) => {
            setStatus('default');
            if (callback) callback();
            if (code === 200) {
              if (form) form.reset();
              const data = store.readQuery({ query: DYNAMIC_LIST });
              data.list.unshift(result);
              // data.meta.count += 1;
              store.writeQuery({ query: DYNAMIC_LIST, data });
            } else {
              Snackbar.error(message);
            }
          },
        });
      }}
      status={status}
      autoFocus={autoFocus}
    />
  );
}

export default DynamicCreate;
