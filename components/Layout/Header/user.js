import React, { PureComponent, Fragment } from 'react';
import { Query, graphql } from 'react-apollo';
import dynamic from 'next/dynamic';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { withStyles } from '@material-ui/core/styles';
import { USERINFO, USER_LOGIN } from '@/graphql/schema/user';
import modal from '@/hoc/modal';
import { USER_TOKEN } from '@/config/base';
import { setStorage } from '@/utils/store';

const DynamicComponentWithCustomLoading = dynamic(() => import('@/view/login/form'), {
  loading: () => <p>...</p>,
});

const styles = theme => ({
  paper: {
    maxWidth: 360,
  },
});

@withStyles(styles)
@graphql(USER_LOGIN)
export default class user extends PureComponent {
  refetch = () => {}

  login = () => {
    const { classes } = this.props;
    modal(this.renderLoginForm, {
      classes: {
        paper: classes.paper,
      },
    });
  }

  onSubmit = async (values, close) => {
    try {
      const { mutate } = this.props;
      const { data: { result: data } } = await mutate({
        variables: values,
        // refetchQueries: ['userInfo'],
      });
      if (data.status === 200) {
        await setStorage(USER_TOKEN, data.token);
        await this.refetch();
        await close();
      }
    } catch (error) {
      console.log('error');
      console.log(error);
    }
  }

  renderLoginForm = ({ close }) => (
    <Fragment>
      <CardMedia
        style={{ height: 0, paddingTop: '60%' }}
        image={'https://imgs.react.mobi/FiIH1AWT8r5hJja50xiBSClwFvek'}
      />
      <CardContent>
        <DynamicComponentWithCustomLoading
          onSubmit={values => this.onSubmit(values, close)}
        />
      </CardContent>
    </Fragment>
  )

  render() {
    return (
      <Query query={USERINFO} errorPolicy="all">
        {({ loading, error, data = {}, refetch }) => {
          if (loading) return null;
          if (error) {
            this.refetch = refetch;
            return (
              <Fragment>
                <Button color="inherit" onClick={this.login}>注册</Button>
                <Button
                  // centerRipple
                  // focusRipple
                  // variant="extendedFab"
                  // color="primary"
                  color="inherit"
                  style={{ background: 'rgba(255,255,255,0.1)' }}
                  onClick={this.login}
                >
登录
                </Button>
              </Fragment>
            );
          }
          const { userInfo = {} } = data;
          return (
            <div>
              <Avatar src={userInfo.avatarUrl} />
            </div>
          );
        }}
      </Query>
    );
  }
}
