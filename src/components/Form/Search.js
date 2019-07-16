import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Form, Field } from 'react-final-form';
import TextField from './TextField';

const styles = () => ({
  root: {
    width: '100%',
  },
});

@withStyles(styles)
export default class SearchBar extends PureComponent {
  render() {
    const { classes, onSubmit, ...other } = this.props;
    return (
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Field
              name="search"
              type="search"
              label="关键字搜索"
              component={TextField}
              className={classes.root}
              // placeholder="请输入关键字"
              {...other}
            />
          </form>
        )}
      />
    );
  }
}
