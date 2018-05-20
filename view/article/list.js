import React from 'react';
import { graphql } from 'react-apollo';
import { ARTICLE_LIST } from '@/graphql/article';
import { fetchMore } from '@/graphql';
import Item from './item';

function PostList({ data, loadMore }) {
  const {
    loading, error, list, meta,
  } = data;

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  const isEnd = meta.count <= list.length;

  return (<div>
    {list.map(i => <Item key={i._id} {...i} />)}
    {!isEnd && <button onClick={() => loadMore()}>
      {loading ? 'Loading...' : 'Show More'}
    </button>}
  </div>);
}


export const params = {
  skip: 0,
  first: 5,
};

export default graphql(ARTICLE_LIST, {
  options: {
    variables: params,
  },
  props: ({ data }) => ({
    data,
    loadMore: () => fetchMore(data),
  }),
})(PostList);
