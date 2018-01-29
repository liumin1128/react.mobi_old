import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import { Field, reduxForm } from 'redux-form';
import PhotoCamera from 'material-ui-icons/PhotoCamera';
import IconButton from 'material-ui/IconButton';
import Input from '../../components/input';
import Button from '../../components/button';
import snackbar from '../../components/snackbar';
import Upload from '../../components/upload';

const styles = () => ({
  root: {
    boxSizing: 'border-box',
    // display: 'flex',
    // flexDirection: 'column',
    // alignItems: 'flex-end',
    // justifyContent: 'flex-end',
    // '@media (max-width: 768px)': {
    //   padding: 16,
    // },
  },
  textarea: {
    width: '100%',
    boxSizing: 'border-box',
  },
  button: {
    width: 150,
    marginTop: 16,
    marginBottom: 16,
  },
  foot: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  action: {
    // border: '1px red solid',
  },
});

const validate = (values) => {
  const errors = {};
  const requiredFields = [
    'content',
  ];
  requiredFields.forEach((field) => {
    if (!values[field]) {
      errors[field] = '不能为空';
    }
  });
  return errors;
};

const renderField = (field) => {
  const {
    input, label, meta: { touched, error, dirty }, ...other
  } = field;
  return (<div style={{ position: 'relative' }}>
    <Input {...input} {...other} />
  </div>);
};

@connect(({ form: fromReducer, common, loading }) => ({
  formValues: fromReducer.say,
  qiniuToken: common.qiniuToken,
  loading: loading['say/create'],
}))
@withStyles(styles)
@reduxForm({ form: 'say', validate })
export default class extends PureComponent {
  componentWillMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'common/getQiniuToken',
    });
  }
  onFocus = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'user/checkAuth',
      cb: () => {
        this.textareaRef.blur();
      },
    });
  }
  onSubmit = ({ content }) => {
    const { dispatch, reset } = this.props;
    console.log('content');
    console.log(content);
    if (content) {
      const photos = this.photos.getValue();

      const payload = { content };
      if (photos.length > 0) {
        payload.photos = photos;
      }
      dispatch({
        type: 'say/create',
        payload,
        cb: reset,
      });
    } else {
      snackbar.error('踌躇满志，厚积薄发');
    }
  }
  render() {
    const {
      classes, handleSubmit, formValues, qiniuToken, loading,
    } = this.props;
    return (
      <section>
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <div className={classes.root}>
            <Upload
              qiniuToken={qiniuToken}
              ref={(c) => { this.photos = c; }}
            />
            <Field
              name="content"
                // autoFocus={autoFocus}
              placeholder="请输入"
              component={renderField}
              className={classes.textarea}
              multiline
              inputRef={(c) => { this.textareaRef = c; }}
              rows={4}
              type="text"
              onFocus={this.onFocus}
            />
            <div className={classes.foot}>
              <div className={classes.action} />
              <Button
                loading={loading}
                disabled={!formValues || formValues.syncErrors !== undefined}
                type="submit"
                className={classes.button}
              >发表</Button>
            </div>

          </div>
        </form>
      </section>
    );
  }
}

