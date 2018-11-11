import React, { PureComponent } from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Mutation } from 'react-apollo';
import { USER_PHONENUMBER_CODE } from '@/graphql/schema/user';
import Snackbar from '@/components/Snackbar';

const styles = (theme) => {
  return {
    getCode: {
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      overflow: 'hidden',
    },
  };
};

@withStyles(styles)
export default class CodeBtn extends PureComponent {
  state = {
    timer: 0,
    disabled: true,
  }

  setTimer = (timer) => {
    this.setState({ timer }, () => {
      if (timer > 0) {
        setTimeout(() => this.setTimer(timer - 1), 1000);
      }
    });
  }


  render() {
    const { classes } = this.props;
    return (
      <Mutation mutation={USER_PHONENUMBER_CODE}>
        {(getPhoneNumberCode, { loading, error, data = {} }) => {
          const { values } = this.props;
          const { purePhoneNumber, countryCode } = values;

          const onGetCode = async () => {
            try {
              if (!countryCode) {
                Snackbar.error('请选择国家');
                return;
              }

              if (!purePhoneNumber) {
                Snackbar.error('请填写手机号');
                return;
              }

              const { data: { result: { status, message } } } = await getPhoneNumberCode({
                variables: { purePhoneNumber, countryCode },
                // refetchQueries: ['ArticleList'],
              });

              this.setTimer(60);
              Snackbar.success('验证码发送成功');

              // Snackbar.success(`[${status}]${message}`);
            } catch (err) {
              console.log('err');
              console.log(err);
            }
          };

          const { timer } = this.state;

          return (
            <Button
              size="small"
              color="primary"
              className={classes.getCode}
              onClick={onGetCode}
              disabled={timer > 0 || !countryCode || !purePhoneNumber}
            >
              {loading && <CircularProgress style={{ marginRight: 4 }} color="inherit" size={14} thickness={5} />}
              {timer > 0 && `${timer} `}
              获取验证码
            </Button>
          );
        }}
      </Mutation>
    );
  }
}
