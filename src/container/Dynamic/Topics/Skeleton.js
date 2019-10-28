import React from 'react';
import ContentLoader from 'react-content-loader';
// import Card from '@material-ui/core/Card';
// import nossr from '@/hoc/nossr';

function Skeleton() {
  return (
    <ContentLoader
      width={300}
      height={48}
      primaryColor="#f3f3f3"
      secondaryColor="#ecebeb"
      uniquekey="topics-skeleton-uniquekey"
    >
      <rect x={0} y={0} rx={4} ry={4} width={50} height={20} />
      <rect x={0 + 50 + 16} y={0} rx={4} ry={4} width={80} height={20} />
      <rect x={0 + 50 + 16 + 80 + 16} y={0} rx={4} ry={4} width={50} height={20} />
      <rect x={0} y={0 + 20 + 8} rx={4} ry={4} width={100} height={20} />
      <rect x={0 + 100 + 16} y={0 + 20 + 8} rx={4} ry={4} width={50} height={20} />
    </ContentLoader>
  );
}

export default Skeleton;
