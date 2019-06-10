import React from 'react';
import Box from '@material-ui/core/Box';
import Content from '@/container/Mzitu/List';
import Tags from '@/container/Mzitu/List/Tags';
import Sider from '@/container/Mzitu/Sider';

function NewsDetail() {
  return (
    <Box>
      <Tags />
      <br />
      <Content />
    </Box>
  );
}

NewsDetail.Sider = Sider;

export default NewsDetail;
