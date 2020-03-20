import React from 'react';
import { useRouter } from 'next/router';
import Container from './container';
import { useMutation, useQuery } from '@/hooks/graphql';
import { UPDATE_ARTICLE, ARTICLE_CONTENT, ARTICLE_LIST } from '@/graphql/schema/article';
import Snackbar from '@/components/Snackbar';

function ArticleUpdate() {
  const router = useRouter();
  const { query } = router;
  const { _id } = query;
  const { data, loading } = useQuery(ARTICLE_CONTENT, { _id }, { ssr: false });
  const [ createArticle ] = useMutation(UPDATE_ARTICLE);

  if (loading) return 'Loading';

  async function onSubmit(values) {
    createArticle({ input: values, _id }, {
      update: (store, { data: { result: { status: code, message, data: result } } }) => {
        if (code === 200) {
          const temp = store.readQuery({ query: ARTICLE_LIST, variables: { _id } });
          const idx = temp.list.findIndex((i) => i._id === _id);
          if (idx === -1) return;
          temp.list[idx] = { ...temp.list[idx], ...values };
          store.writeQuery({ query: ARTICLE_LIST, data: temp, variables: { _id } });
          Snackbar.success(message);
          router.push('/article');
        } else {
          Snackbar.error(message);
        }
      },
    });
    // const { result } = res.data;

    // if (result.status === 200) {

    //   Snackbar.success(result.message);

    //   const data = store.readQuery({ query: ARTICLE_LIST, variables: router.query });
    //   data.list.unshift(result);
    //   store.writeQuery({ query: ARTICLE_LIST, data, variables: router.query });

    //   router.push('/article');
    // } else {
    //   Snackbar.success(result.message);
    // }
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
