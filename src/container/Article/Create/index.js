
import React from 'react';
// import Eidtor from '@/container/Article/Components/Eidtor';
import dynamic from 'next/dynamic';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';

const EidtorWithNoSSR = dynamic(
  () => import('@/container/Article/Components/Eidtor'),
  { ssr: false, loading: () => 'loading' },
);

function Index() {
  return (
    <>
      <Box>
        <Paper>
          <EidtorWithNoSSR />
        </Paper>
      </Box>
    </>
  );
}

// Index.Sider = FlatList;

export default Index;
