import React, { PureComponent, Fragment } from 'react';
import Button from '@material-ui/core/Button';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

export default class Like extends PureComponent {
  render() {
    const { count = 0, className } = this.props;
    return (
      <Fragment>
        <Button className={className} size="small" variant="outlined" color="primary">
          <ArrowDropUpIcon />
          {`like ${count}`}
        </Button>
        <Button className={className} size="small" variant="outlined" color="primary">
          <ArrowDropDownIcon />
        </Button>
      </Fragment>
    );
  }
}
