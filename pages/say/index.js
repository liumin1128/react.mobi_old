import React, { PureComponent, Fragment } from 'react';
import Button from '@material-ui/core/Button';
import withRoot from '@/hoc/styleRoot';

@withRoot
export default class Says extends PureComponent {
  render() {
    return (
      <Fragment>
        <h1>5555</h1>
        <Button color="primary">7777</Button>
      </Fragment>
    );
  }
}
