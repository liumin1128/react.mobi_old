import React from 'react';
import Content from '@/container/News/Detail';
import FlatList from '@/container/News/List/FlatList';

function NewsDetail() {
  return (
    <Content />
  );
}

NewsDetail.Sider = FlatList;

export default NewsDetail;
