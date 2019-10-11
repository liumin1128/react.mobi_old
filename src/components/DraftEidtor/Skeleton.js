import React from 'react';
import ContentLoader from 'react-content-loader';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
// import nossr from '@/hoc/nossr';

function Skeleton() {
  return (
    <Box>
      <Paper>
        <Box width={580} maxWidth={580} style={{ overflow: 'hidden' }}>
          <ContentLoader
            width={580}
            height={300}
            primaryColor="#f3f3f3"
            secondaryColor="#ecebeb"
            uniquekey="skeleton-uniquekey"
          >
            {[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ].map((i, index) => <rect key={i} x={26 + index * 36} y={18} rx={4} ry={4} width={16} height={16} />)}
            <rect x={0} y={18 + 34} rx={1} ry={1} width={'100%'} height={2} />
            <rect x={26} y={18 + 34 + 20} rx={4} ry={4} width={280} height={18} />
            <rect x={26} y={18 + 34 + 20 + 36} rx={4} ry={4} width={480} height={18} />
            <rect x={26} y={18 + 34 + 20 + 36 + 36} rx={4} ry={4} width={100} height={18} />
          </ContentLoader>
        </Box>

      </Paper>
    </Box>

  );
}

export default Skeleton;
