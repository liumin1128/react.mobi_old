import React, { PureComponent, createRef } from 'react';
import { Mutation, Query } from 'react-apollo';
import { Form, Field } from 'react-final-form';
import { withRouter } from 'next/router';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

import RichEditor from '@/components/Form/RichEditor';
import TextField from '@/components/Form/TextField';
import Snackbar from '@/components/snackbar';

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
  if (!values.tags) {
    errors.tags = '标签不可以不填';
  }
  return errors;
};


@withStyles(styles)
@withRouter
export default class ArticleCreate extends PureComponent {
  editor = createRef()


  render() {
    const { classes, _id, router } = this.props;
    const formData = {};

    return (
      <Query query={ARTICLE_CONTENT} variables={{ _id }}>
        {({ loading, error, data = {}, refetch }) => {
          const { detail = {} } = data;
          if (loading) return 'Loading...';
          if (error) {
            return (
              <div>
                {`Error! ${error.message}`}
                <a onClick={() => { refetch({ _id: id }); }}>refetch</a>
              </div>
            );
          }
          return (
            <div className={classes.root} />
          );
        }}
      </Query>
    );
  }
}
