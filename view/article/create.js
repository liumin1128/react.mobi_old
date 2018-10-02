import React, { PureComponent } from 'react';
import NoSsr from '@material-ui/core/NoSsr';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { Form, Field } from 'react-final-form';
import DraftEditor from '@/components/DraftEditor';
import Layout from '@/components/Layout';
import TextField from '@/components/Form/TextField';

const styles = theme => ({
  Card: {
    color: theme.palette.text.secondary,
  },
});

const formKeys = [
  {
    key: 'title',
    label: '文章标题',
  },
];

@withStyles(styles)
export default class ArticleCreate extends PureComponent {
  onSubmit = (values) => {
    console.log('values');
    console.log(values);
  }

  validate = (values) => {
    const errors = {};
    if (!values.title) {
      errors.title = '标题不可以不填';
    }
    return errors;
  }

  render() {
    const { classes } = this.props;
    const formData = {};
    return (
      <div>
        <Layout>
          <Grid container spacing={24}>
            <Grid item md={8} xs={12}>
              <Card className={classes.Card}>
                <NoSsr>
                  <DraftEditor />
                </NoSsr>
              </Card>
            </Grid>
            <Grid item md={4} xs={12}>
              <Card className={classes.Card}>
                <CardContent>

                  <Form
                    onSubmit={this.onSubmit}
                    initialValues={formData}
                    // values={formData}
                    validate={this.validate}
                    render={({ handleSubmit, reset, submitting, pristine, change, values }) => (
                      <form id="createArticleForm" onSubmit={handleSubmit}>

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
                          type="submit"
                          variant="contained"
                          color="primary"
                          className={classes.submitButton}
                        >
                        确认
                        </Button>
                      </form>
                    )}
                  />
                </CardContent>

              </Card>
            </Grid>
          </Grid>
        </Layout>
      </div>
    );
  }
}
