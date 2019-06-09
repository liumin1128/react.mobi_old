import React, { PureComponent, Fragment } from 'react';
import Container from '@material-ui/core/Container';
import Content from '@/container/News/Detail';

class NewsDetail extends PureComponent {
  render() {
    return (
      <Container maxWidth="sm">
        <Content />
      </Container>
    );
  }
}

NewsDetail.Side = Content;

export default NewsDetail;
