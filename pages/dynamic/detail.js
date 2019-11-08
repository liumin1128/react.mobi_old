import React from 'react';
import withApollo from '@/lib/apollo';
import withLayout from '@/hoc/layout';
import Content from '@/container/Dynamic/Detail';
// import ProfileCard from '@/container/User/ProfileCard';

function Index() {
  return (
    <Content />
  );
}

// Index.Sider = () => (
//   <>
//     <ProfileCard />
//   </>
// );

export default withApollo(withLayout(Index));
