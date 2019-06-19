import React from 'react';
import SayList from '@/container/Say/List';
import SayCreate from '@/container/Say/Create';

function Index() {
  return (
    <SayList />
  );
}

Index.Sider = SayCreate;

export default Index;
