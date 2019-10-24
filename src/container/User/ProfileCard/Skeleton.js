import React from 'react';
import ContentLoader from 'react-content-loader';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
// import nossr from '@/hoc/nossr';

function Skeleton() {
  return (
    <Card>
      <Box style={{ height: 158 }}>
        <ContentLoader
          width={282}
          height={158}
          // speed={10}
          primaryColor="#f3f3f3"
          secondaryColor="#ecebeb"
          uniquekey="skeleton-uniquekey"
        >
          <circle cx={`${32 + 32}px`} cy={`${16 + 32}px`} r={`${32}px`} />
          <rect x={`${24 + 32 + 32 + 16}px`} y={`${32}px`} rx={`${4}px`} ry={`${4}px`} width={`${80}px`} height={`${14}px`} />
          <rect x={`${24 + 32 + 32 + 16}px`} y={`${32 + 24}px`} rx={`${4}px`} ry={`${4}px`} width={`${120}px`} height={`${10}px`} />
          <rect x={0} y={16 + 32 + 32 + 16} rx={1} ry={1} width={'100%'} height={1} />
          <rect x={16} y={16 + 32 + 32 + 24 + 16} rx={4} ry={4} width={50} height={20} />
          <rect x={16 + 90} y={16 + 32 + 32 + 24 + 16} rx={4} ry={4} width={50} height={20} />
          <rect x={16 + 170} y={16 + 32 + 32 + 24 + 16} rx={4} ry={4} width={50} height={20} />
        </ContentLoader>
      </Box>
    </Card>
  );
}

export default Skeleton;
