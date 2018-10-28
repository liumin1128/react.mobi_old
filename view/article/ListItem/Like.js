import React, { PureComponent, Fragment } from 'react';
import { Mutation } from 'react-apollo';
import Button from '@material-ui/core/Button';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { LIKE } from '@/graphql/schema/like';

export default class Like extends PureComponent {
  state = {
    status: '',
  }

  like = () => {
    this.setState(({ status }) => ({ status: status === 'like' ? '' : 'like' }));
  }

  unlike = () => {
    this.setState(({ status }) => ({ status: status === 'unlike' ? '' : 'unlike' }));
  }

  render() {
    const { count = 0, className } = this.props;
    const { status } = this.state;
    return (
      <Mutation mutation={LIKE}>
        {(like, { loading, error, data = {} }) => {
          const onLike = async (type) => {
            try {
              const { id } = this.props;
              const res = await like({
                variables: { id, unlike: false },
                // refetchQueries: [ 'ArticleList' ],
              });
              console.log('res');
              console.log(res);
            } catch (err) {
              console.log('err');
              console.log(err);
            }
          };
          return (
            <Fragment>
              <Button onClick={onLike} className={className} size="small" variant={status === 'like' ? 'contained' : 'outlined'} color="primary">
                <ArrowDropUpIcon />
                {`like ${status === 'like' ? count + 1 : count}`}
              </Button>
              <Button onClick={this.unlike} className={className} size="small" variant="outlined" color="primary">
                <ArrowDropDownIcon />
              </Button>
            </Fragment>
          );
        }}
      </Mutation>

    );
  }
}
