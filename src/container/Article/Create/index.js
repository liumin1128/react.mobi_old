
import React from 'react';
// import Eidtor from '@/container/Article/Components/Eidtor';
import dynamic from 'next/dynamic';

const EidtorWithNoSSR = dynamic(
  () => import('@/container/Article/Components/Eidtor'),
  { ssr: false, loading: () => 'loading' },
);

function Index() {
  return (
    <>
      <EidtorWithNoSSR />
    </>
  );
}

// Index.Sider = FlatList;

export default Index;
