
import React from 'react';
import ArticleCreate from '@/container/Article/Create/update';
import withApollo from '@/lib/apollo';
import withLayout from '@/hoc/layout';

function Index() {
  return (
    <>
      <ArticleCreate />
    </>
  );
}

Index.Header = () => null;
Index.maxWidth = 'lg';

export default withApollo(withLayout(Index));
