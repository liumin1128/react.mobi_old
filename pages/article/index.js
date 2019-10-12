
import React from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import ArticleList from '@/container/Article/List';
import ProfileCard from '@/container/User/ProfileCard';
import Link from '@/components/Link';


function Index() {
  return (
    <>
      <ArticleList />
    </>
  );
}

Index.Sider = () => (
  <Box>
    <ProfileCard />
    <Link href="/article/create">
      <Button>写文章</Button>
    </Link>
  </Box>
);

export default Index;
