
import React from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import ArticleList from '@/container/Article/List';
import ProfileCard from '@/container/User/ProfileCard';
import Link from '@/components/Link';
import withApollo from '@/lib/apollo';
import withLayout from '@/hoc/layout';

function Index() {
  return (
    <>
      <ArticleList />
    </>
  );
}

Index.Sider = () => (
  <>
    222
  </>
);

Index.Sider = () => (
  <Box>
    <ProfileCard />
    <Box mt={2} />
    <Link href="/article/create">
      <Button variant="contained" fullWidth color="primary">写文章</Button>
    </Link>
  </Box>
);


export default withApollo(withLayout(Index));
