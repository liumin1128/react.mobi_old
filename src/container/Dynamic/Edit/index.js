import React from 'react';
import { withRouter } from 'next/router';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { DYNAMIC_DETAIL, DYNAMIC_UPDATE } from '@/graphql/schema/dynamic';
import { useQuery, useMutation } from '@/hooks/graphql';
import Loading from '@/components/Loading';
import Snackbar from '@/components/Snackbar';
import Editor from '../components/Editor';

function DynamicDetail({ router }) {
  const { data, error, loading, refetch } = useQuery(DYNAMIC_DETAIL, router.query);

  const [ update ] = useMutation(DYNAMIC_UPDATE);

  if (loading) return <Loading />;

  const { data: { iframe, pictures, content, _id } } = data;

  if (error) {
    return (
      <div>
        {`Error! ${error.message}`}
        <Button onClick={() => { refetch({ _id }); }}>refetch</Button>
      </div>
    );
  }

  function _onSubmit(values) {
    update({ input: values, _id }, {
      update: (store, { data: { result: { status: code, message } } }) => {
        if (code === 200) {
          window.location.href = `/dynamic/detail?_id=${_id}`;
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
            initialValues={{ iframe, pictures, content }}
            onSubmit={_onSubmit}
          />
        </Box>
      </Box>
    </div>
  );
}


export default withRouter(DynamicDetail);
