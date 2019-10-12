import React from 'react';
import { useRouter, withRouter } from 'next/router';
import Container from './container';
import { useMutation, useQuery } from '@/hooks/graphql';
import { CREATE_ARTICLE, ARTICLE_CONTENT } from '@/graphql/schema/article';


function ArticleUpdate() {
  const router = useRouter();
  const { query } = router;
  const { _id } = query;
  // const { data } = useQuery(ARTICLE_CONTENT, { id });

  const { data, loading } = useQuery(ARTICLE_CONTENT, { _id }, { ssr: false });

  console.log(data);

  const [ createArticle ] = useMutation(CREATE_ARTICLE);

  async function onSubmit(values) {
    console.log(values);

    const data = await createArticle(values);

    console.log('data');
    console.log(data);
  }

  if (loading) return 'Loading';

  const { cover, json, description, title, tags, type } = data.data;

  const initialValues = {
    title,
    description,
    type,
    cover,
    tags,
    json,
  };

  return (
    <Container
      values={initialValues}
      onSubmit={onSubmit}
    />
  );
}

export default ArticleUpdate;
