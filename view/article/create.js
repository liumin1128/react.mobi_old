import React, { PureComponent } from 'react';
import dynamic from 'next/dynamic';
import { graphql } from 'react-apollo';
import { CREATE_ARTICLE } from '../../graphql/article';

const Editor = dynamic(import('../../components/slate-editor'), {
  ssr: false,
});

@graphql(CREATE_ARTICLE, {
  props: ({ mutate }) => ({
    createArticle: input => mutate({
      variables: { input },
      refetchQueries: ['ArticleList'],
    }),
  }),
})
export default class CreateArticle extends PureComponent {
  handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new window.FormData(form);
    const content = formData.get('content');
    const title = formData.get('title');
    const cover = 'https://imgs.react.mobi/FmwTWWLlCqAAfbo1Bjo9ScjZmh50';
    const { createArticle } = this.props;
    createArticle({ content, title, cover });
    form.reset();
  }
  render() {
    return (
      <div>
        <Editor />
        <form onSubmit={this.handleSubmit}>
          <h1>创建文章</h1>
          <input placeholder="title" name="title" type="text" required />
          <input placeholder="content" name="content" type="text" required />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
