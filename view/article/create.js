import React, { PureComponent, Fragment, createRef } from 'react';
// import dynamic from 'next/dynamic';
import { withStyles } from 'material-ui/styles';
import { graphql } from 'react-apollo';
import { Form, Field } from 'react-final-form';
import Color from 'color';
import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card';
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
  media: {
    // height: 300,
    height: 0,
    // paddingTop: '40%',
    background: `linear-gradient(60deg, ${Color(theme.palette.primary.main).lighten(0.1)}, ${Color(theme.palette.primary.main).darken(0.1)})`,
    // boxShadow: `0 4px 20px 0px ${Color(theme.palette.primary.main).alpha(0.3)}, 0 7px 10px -5px ${Color(theme.palette.primary.main).alpha(0.5)}`,
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
  state = {
    cover: undefined,
  }
  editor = createRef()
  handleSubmit = ({ title, tags }) => {
    const { cover } = this.state;
    const html = this.editor.getHtml();
    const json = this.editor.getJson();
    console.log(title, tags, html, json, cover);
    const { createArticle } = this.props;
    createArticle({
      content: html,
      rawData: JSON.stringify(json),
      rawDataType: 'draft',
      tags: tags.split(' '),
      title,
      cover,
    });
  }
  validate = (values) => {
    const errors = {};
    if (!values.title) {
      errors.title = '文章标题不能留空';
    }
    if (!values.tags) {
      errors.tags = '至少填写一个标签';
    }
    return errors;
  }
  render() {
    const { classes } = this.props;
    const { cover } = this.state;
    return (
      <Fragment>
        <Appbar
          onSetCover={(data) => {
            this.setState({ cover: data });
          }}
          onSave={() => {
              document
              .getElementById('createArticleForm')
              .dispatchEvent(new Event('submit', { cancelable: true }));
          }}
        />
        <Card >
          <CardMedia
            className={classes.media}
            style={{ paddingTop: cover ? '40%' : 0 }}
            image={cover}
          />

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
                      label="标题"
                      type="text"
                      component={TextField}
                      margin="normal"
                      fullWidth
                    />
                    <Field
                      name="tags"
                      label="标签"
                      type="text"
                      placeholder="多个标签请用空格隔开"
                      component={TextField}
                      margin="normal"
                      fullWidth
                    />
                    <br />
                    <br />
                  </form>
              )}
              />
              <Editor
                ref={(c) => { this.editor = c; }}
              />
            </div>
          </CardContent>
        </Card>
      </Fragment>

    );
  }
}
