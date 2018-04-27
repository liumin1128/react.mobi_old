import React, { PureComponent } from 'react';
// import TextField from 'material-ui/TextField';
import { withStyles } from 'material-ui/styles';
import Card, { CardHeader, CardMedia, CardContent } from 'material-ui/Card';
import { Form, Field } from 'react-final-form';
import TextField from '../form/textField';

const styles = theme => ({
  root: {
    width: '100%',
  },
});

@withStyles(styles)
export default class SearchBar extends PureComponent {
  render() {
    const { classes, onSubmit } = this.props;
    return (<Card>
      <CardContent>
        <Form
          onSubmit={onSubmit}
          // initialValues={initialValue}
          // validate={this.validate}
          render={({ handleSubmit, reset, submitting, pristine, change, values }) => (
            <form onSubmit={handleSubmit}>
              <Field
                name="search"
                label="搜索"
                type="search"
                component={TextField}
                className={classes.root}
                placeholder="请输入关键字"
              />
            </form>
        )}
        />
      </CardContent>

    </Card>);
  }
}
