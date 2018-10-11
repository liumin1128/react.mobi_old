import React, { PureComponent } from 'react';
import { Mutation } from 'react-apollo';
import NoSsr from '@material-ui/core/NoSsr';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { Form, Field } from 'react-final-form';
import RichEditor from '@/components/Form/RichEditor';
import Layout from '@/components/Layout';
import TextField from '@/components/Form/TextField';
import { CREATE_ARTICLE } from '@/graphql/schema/article';

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

@withStyles(styles)
export default class ArticleCreate extends PureComponent {
  validate = (values) => {
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
  }

  render() {
    const { classes } = this.props;
    const formData = {};
    return (
      <Layout>
        <Mutation mutation={CREATE_ARTICLE}>
          {(createArticle, { loading, error, data = {} }) => {
            const onSubmit = async ({ tags, ...values }) => {
              // const html = this.editor.getHtml();
              // const json = this.editor.getJson();

              try {
                const result = await createArticle({
                  variables: { input: { ...values, tags: tags.split(' ') } },
                  refetchQueries: ['ArticleList'],
                });
                console.log('result');
                console.log(result);
              } catch (err) {
                console.log('err');
                console.log(err);
                // Snackbar.error('文章发布失败');
              }
            };

            return (
              <Form
                onSubmit={onSubmit}
                initialValues={formData}
                // values={formData}
                validate={this.validate}
                render={({ handleSubmit, reset, submitting, pristine, change, values }) => (
                  <form id="createArticleForm" onSubmit={handleSubmit}>
                    <Grid container spacing={24}>
                      <Grid item md={8} xs={12}>
                        <Card className={classes.Card}>
                          <NoSsr>
                            <Field
                              key="content"
                              name="content"
                              component={RichEditor}
                              fullWidth
                            />
                          </NoSsr>
                        </Card>
                      </Grid>
                      <Grid item md={4} xs={12}>
                        <Card className={classes.Card}>
                          <CardContent>
                            {
                              formKeys.map(i => (
                                <Field
                                  key={i.key}
                                  name={i.key}
                                  label={i.label}
                                  component={TextField}
                                  type="text"
                                  margin="normal"
                                  fullWidth
                                  value={formData[i.key]}
                                  {...i.props}
                                />
                              ))
                            }
                            <Button
                              variant="contained"
                              size="large"
                              color="primary"
                              type="submit"
                              className={classes.submitButton}
                            >
                              确认
                            </Button>
                          </CardContent>
                        </Card>
                      </Grid>
                    </Grid>
                  </form>
                )}
              />
            );
          }}
        </Mutation>
      </Layout>
    );
  }
}
