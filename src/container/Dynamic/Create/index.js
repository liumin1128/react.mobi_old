import React from 'react';
import { withRouter } from 'next/router';
import Box from '@material-ui/core/Box';
import { DYNAMIC_LIST, DYNAMIC_CREATE, DYNAMIC_TOPIC } from '@/graphql/schema/dynamic';
import { useQuery, useMutation } from '@/hooks/graphql';
import Snackbar from '@/components/Snackbar';
import Editor from '../components/Editor';

function DynamicCreate({ router }) {
  const [ createDynamic ] = useMutation(DYNAMIC_CREATE);

  const res = useQuery(DYNAMIC_TOPIC, router.query);
  const topic = (res.data || {}).data;
  const defaultContent = topic ? `#${topic.title}#` : '';

  function _onSubmit(input, cb) {
    createDynamic({ input }, {
      update: (store, { data: { result: { status: code, message, data: result } } }) => {
        if (code === 200) {
          cb();
          const data = store.readQuery({ query: DYNAMIC_LIST, variables: router.query });
          data.list.unshift(result);
          store.writeQuery({ query: DYNAMIC_LIST, data, variables: router.query });
        } else {
          Snackbar.error(message);
        }
      },
    });
  }

  return (
    <div>
      <Box display="flex" justifyContent="center">
        <Box style={{ width: '100%' }} maxWidth={600}>
          <Editor
            initialValues={{ content: defaultContent, pictures: [] }}
            onSubmit={_onSubmit}
          />
        </Box>
      </Box>
    </div>
  );
}


export default withRouter(DynamicCreate);
