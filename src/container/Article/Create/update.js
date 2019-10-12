import React from 'react';
import { useRouter } from 'next/router';
import Container from './container';
import { useMutation, useQuery } from '@/hooks/graphql';
import { UPDATE_ARTICLE, ARTICLE_CONTENT } from '@/graphql/schema/article';
import Snackbar from '@/components/Snackbar';


function ArticleUpdate() {
  const router = useRouter();
  const { query } = router;
  const { _id } = query;
  // const { data } = useQuery(ARTICLE_CONTENT, { id });

  const { data, loading } = useQuery(ARTICLE_CONTENT, { _id }, { ssr: false });

  const [ createArticle ] = useMutation(UPDATE_ARTICLE);


  if (loading) return 'Loading';

  async function onSubmit(values) {
    console.log(values);

    const res = await createArticle({ input: values, _id });

    if (res.data.result.status === 200) {
      Snackbar.success(res.data.result.message);
    } else {
      Snackbar.success(res.data.result.message);
    }
  }

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
