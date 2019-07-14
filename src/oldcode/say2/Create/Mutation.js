import React, { PureComponent, createRef } from 'react';
import { Mutation, Query } from 'react-apollo';
import { Form, Field } from 'react-final-form';
import { withRouter } from 'next/router';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import CircularProgress from '@material-ui/core/CircularProgress';

import RichEditor from '@/components/Form/RichEditor';
import TextField from '@/components/Form/TextField';
import Snackbar from '@/components/Snackbar';

import { CREATE_ARTICLE, ARTICLE_CONTENT } from '@/graphql/schema/article';

const styles = theme => ({
  Card: {
    color: theme.palette.text.secondary,
  },
  submitButton: {
    marginTop: 20,
    width: '100%',
  },
});

const formKeys = [
  {
    key: 'title',
    label: '文章标题',
  },
  {
    key: 'description',
    label: '描述',
  },
  {
    key: 'tags',
    label: '标签',
  },
];

const validate = (values) => {
  const errors = {};
  if (!values.title) {
    errors.title = '标题不可以不填';
  }
  if (!values.description) {
    errors.description = '描述不可以不填';
  }
  // if (!values.tags) {
  //   errors.tags = '标签不可以不填';
  // }
  return errors;
};


@withStyles(styles)
@withRouter
export default class ArticleCreate extends PureComponent {
  render() {
    const { router, _id } = this.props;
    return (
      <Mutation mutation={CREATE_ARTICLE}>
        {(createArticle, { loading, error, data = {} }) => {
          const onSubmit = async ({ tags, ...values }) => {
            try {
              const html = this.editor.getHTML();
              const json = JSON.stringify(this.editor.getJSON());
              const params = { ...values, html, json, tags: tags ? tags.split(' ') : [], _id };

              const { data: { result: { status, message } } } = await createArticle({
                variables: { input: params },
                refetchQueries: [ 'ArticleList', 'ArticleDetail' ],
                // awaitRefetchQueries: true,
              });

              Snackbar.success(`[${status}]${message}`);
              router.push('/');
            } catch (err) {
              console.log('err');
              console.log(err);
              // Snackbar.error('文章发布失败');
            }
          };

          return this.renderForm({ onSubmit, initialValues, loading });
        }}
      </Mutation>
    );
  }
}
