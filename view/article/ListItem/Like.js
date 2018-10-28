import React, { PureComponent, Fragment } from 'react';
import { Mutation } from 'react-apollo';
import Button from '@material-ui/core/Button';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import CircularProgress from '@material-ui/core/CircularProgress';
import { LIKE } from '@/graphql/schema/like';

export default class Like extends PureComponent {
  state = {
    active: '',
  }

  render() {
    const { count = 0, className } = this.props;
    const { active } = this.state;
    return (
      <Mutation mutation={LIKE}>
        {(like, { loading, error, data = {} }) => {
          const onLike = async (unlike) => {
            try {
              this.setState({ active: unlike ? 'unlike' : 'like' });
              const { id } = this.props;
              const res = await like({
                variables: { id, unlike },
                refetchQueries: [ 'ArticleList' ],
                awaitRefetchQueries: true,
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
              <Button onClick={() => onLike()} className={className} size="small" variant="outlined" color="primary">
                {(loading && active === 'like') ? <CircularProgress color="inherit" size={24} thickness={5} /> : <ArrowDropUpIcon />}
                {` like ${count}`}
              </Button>
              <Button onClick={() => onLike(true)} className={className} size="small" variant="outlined" color="primary">
                {(loading && active === 'unlike') ? <CircularProgress color="inherit" size={24} thickness={5} /> : <ArrowDropDownIcon />}
              </Button>
            </Fragment>
          );
        }}
      </Mutation>

    );
  }
}
