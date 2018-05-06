import React, { PureComponent, Fragment } from 'react';
// import dynamic from 'next/dynamic';
import { withStyles } from 'material-ui/styles';
import { graphql } from 'react-apollo';
import { Form, Field } from 'react-final-form';
import Card, { CardHeader, CardMedia, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Editor from '../../components/draft-editor';
import TextField from '../../components/form/textField';
import { CREATE_ARTICLE } from '../../graphql/article';
import Appbar from './appbar';

const styles = theme => ({
  root: {
    maxWidth: 700,
    margin: '0 auto',
  },
});

@graphql(CREATE_ARTICLE, {
  props: ({ mutate }) => ({
    createArticle: input => mutate({
      variables: { input },
      refetchQueries: ['ArticleList'],
    }),
  }),
})
@withStyles(styles)
export default class CreateArticle extends PureComponent {
  handleSubmit = (values) => {
    console.log('values');
    console.log(values);
    // event.preventDefault();
    // const form = event.target;
    // const formData = new window.FormData(form);
    // const content = formData.get('content');
    // const title = formData.get('title');
    // const cover = 'https://imgs.react.mobi/FmwTWWLlCqAAfbo1Bjo9ScjZmh50';
    // // const { createArticle } = this.props;
    // console.log('{ content, title, cover }');
    // console.log({ content, title, cover });
    // createArticle({ content, title, cover });
    // form.reset();
  }
  validate = (values) => {
    const errors = {};
    if (!values.title) {
      errors.title = '用户名不能为空';
    }
    // if (!values.content) {
    //   errors.content = '密码不能为空';
    // }
    return errors;
  }
  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <Appbar />
        <Card >
          <CardContent>
            <div className={classes.root}>
              <Form
                onSubmit={this.handleSubmit}
                // initialValues={initialValue}
                validate={this.validate}
                render={({ handleSubmit, reset, submitting, pristine, change, values }) => (
                  <form id="createArticleForm" onSubmit={handleSubmit}>
                    <Field
                      name="title"
                      label="请输入标题"
                      type="text"
                      component={TextField}
                      margin="normal"
                      fullWidth
                    />
                    <br />
                    <br />

                    <br />
                  </form>
              )}
              />
              <Editor />
            </div>
          </CardContent>
        </Card>
      </Fragment>

    );
  }
}
