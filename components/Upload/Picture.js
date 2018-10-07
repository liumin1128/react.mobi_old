import React, { PureComponent } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import uploadToQiniu from './uploadToQiniu';

@uploadToQiniu
export default class picture extends PureComponent {
  render() {
    console.log(this.props);
    const { data: { loading, qiniuToken = {} } } = this.props;
    if (loading) return <CircularProgress />;

    return (
      <div>
        picture
        {qiniuToken.token}
      </div>
    );
  }
}
