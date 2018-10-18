import React, { PureComponent, Fragment } from 'react';
import { Query } from 'react-apollo';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { withStyles } from '@material-ui/core/styles';

import { USERINFO } from '@/graphql/schema/user';
import dynamic from 'next/dynamic';
import modal from '@/hoc/modal';

const DynamicComponentWithCustomLoading = dynamic(() => import('@/view/login/form'), {
  loading: () => <p>...</p>,
});

const styles = theme => ({
  paper: {
    maxWidth: 360,
  },
});

@withStyles(styles)
export default class user extends PureComponent {
  login = () => {
    const { classes } = this.props;
    modal(() => (
      <Fragment>
        <CardMedia
          style={{ height: 0, paddingTop: '60%' }}
          image={'https://imgs.react.mobi/FiIH1AWT8r5hJja50xiBSClwFvek'}
        />
        <CardContent>
          <DynamicComponentWithCustomLoading
            onSubmit={(values) => {
              console.log('values');
              console.log(values);
            }}
          />
        </CardContent>
      </Fragment>
    ), {
      // fullScreen: true,
      // fullWidth: true,
      classes: {
        paper: classes.paper,
      },
      // style: { maxWidth: 360 },
    });
  }

  render() {
    return (
      <Query query={USERINFO} errorPolicy="all">
        {({ loading, error, data = {}, refetch }) => {
          if (loading) return 'Loading...';
          if (error) return <Button color="inherit" onClick={this.login}>Login</Button>;
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
