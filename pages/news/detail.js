import React, { PureComponent, Fragment } from 'react';
import Container from '@material-ui/core/Container';
import Content from '@/container/News/Detail';


function NewsDetail() {
  return (
    <Container maxWidth="sm">
      <Content />
    </Container>
  );
}

NewsDetail.Sider = Content;

export default NewsDetail;
