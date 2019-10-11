
import React from 'react';
import dynamic from 'next/dynamic';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Skeleton from '@/components/DraftEidtor/Skeleton';

const EidtorWithNoSSR = dynamic(
  () => import('@/components/DraftEidtor'),
  { ssr: false, loading: () => <Skeleton /> },
);

const json = '{"blocks":[{"key":"fnng1","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"798as","text":" ","type":"atomic","depth":0,"inlineStyleRanges":[],"entityRanges":[{"offset":0,"length":1,"key":0}],"data":{}},{"key":"49cc7","text":"212121","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{"0":{"type":"image","mutability":"IMMUTABLE","data":{"src":"https://imgs.react.mobi/FlWDA30s6yWJNLdf3t1PFQDLRueF"}}}}';

function Index() {
  return (
    <>
      <Box>
        <Paper>
          <EidtorWithNoSSR
            initialValue={JSON.parse(json)}
            // debug
          />
        </Paper>
      </Box>
    </>
  );
}

// Index.Sider = FlatList;

export default Index;
