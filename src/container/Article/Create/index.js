import React from 'react';
import Container from './container';
import { useMutation, useQuery } from '@/hooks/graphql';
import { CREATE_ARTICLE } from '@/graphql/schema/article';
import Snackbar from '@/components/Snackbar';

const initialValues = {
};

export default function () {
  const [ createArticle ] = useMutation(CREATE_ARTICLE);

  async function onSubmit(values) {
    console.log(values);

    const res = await createArticle({ input: values });

    if (res.data.result.status === 200) {
      Snackbar.success(res.data.result.message);
    } else {
      Snackbar.success(res.data.result.message);
    }
  }
  return (
    <Container
      values={initialValues}
      onSubmit={onSubmit}
    />
  );
}
