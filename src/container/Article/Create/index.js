import React from 'react';
import Router from 'next/router';

import Container from './container';
import { useMutation, useQuery } from '@/hooks/graphql';
import { CREATE_ARTICLE } from '@/graphql/schema/article';
import Snackbar from '@/components/Snackbar';

const initialValues = {
};

export default function () {
  const [ createArticle ] = useMutation(CREATE_ARTICLE);

  async function onSubmit(values) {
    await createArticle({ input: values }, {
      refetchQueries: [ 'ArticleList' ],
      update: (store, { data: { result: { status: code, message, data: result } } }) => {
        if (code === 200) {
          Snackbar.success(message);
          Router.push('/article');
        } else {
          Snackbar.error(message);
        }
      },
    });
  }
  return (
    <Container
      values={initialValues}
      onSubmit={onSubmit}
    />
  );
}
