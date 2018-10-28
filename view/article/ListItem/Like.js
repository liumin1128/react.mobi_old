import React, { PureComponent, Fragment } from 'react';
import Button from '@material-ui/core/Button';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

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
      <Fragment>
        <Button onClick={this.like} className={className} size="small" variant={status === 'like' ? 'contained' : 'outlined'} color="primary">
          <ArrowDropUpIcon />
          {`like ${status === 'like' ? count + 1 : count}`}
        </Button>
        <Button onClick={this.unlike} className={className} size="small" variant="outlined" color="primary">
          <ArrowDropDownIcon />
        </Button>
      </Fragment>
    );
  }
}
