import React from 'react';
import { withRouter } from 'next/router';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { DYNAMIC_DETAIL, DYNAMIC_LIST, DYNAMIC_CREATE } from '@/graphql/schema/dynamic';
import { useQuery, useMutation } from '@/hooks/graphql';
import Loading from '@/components/Loading';
import Snackbar from '@/components/Snackbar';
import Editor from '../components/Editor';


function DynamicDetail({ router }) {
  const { data, error, loading, refetch } = useQuery(DYNAMIC_DETAIL, router.query);

  const [ createDynamic ] = useMutation(DYNAMIC_CREATE);

  if (loading) return <Loading />;

  const { data: { user, iframe, pictures, content, createdAt, topics = [], _id, zanCount, zanStatus, commentCount } } = data;

  if (error) {
    return (
      <div>
        {`Error! ${error.message}`}
        <Button onClick={() => { refetch({ _id }); }}>refetch</Button>
      </div>
    );
  }

  function _onSubmit(values, cb) {
    createDynamic({ input: values }, {
      update: (store, { data: { result: { status: code, message, data: result } } }) => {
        if (code === 200) {
          cb();
          const _data = store.readQuery({ query: DYNAMIC_LIST, variables: router.query });
          _data.list.unshift(result);
          store.writeQuery({ query: DYNAMIC_LIST, data: _data, variables: router.query });
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
          {content}
          <Editor
            initialValue={content}
            onSubmit={_onSubmit}
          />
        </Box>
      </Box>
    </div>
  );
}


export default withRouter(DynamicDetail);
