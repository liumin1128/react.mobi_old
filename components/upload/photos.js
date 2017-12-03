import React, { PureComponent } from 'react';
import Upload from './index';

export default class extends PureComponent {
  state = {
    fileList: [],
  }
  onChange = ({ file, fileList }) => {
    console.log(file, fileList);
    if (fileList.findIndex(i => i.status !== 'done') === -1) {
      this.setState({
        fileList: fileList.map(i => i.response.key),
      });
    }
  }
  getValue = ({ fileList }) => {
    return fileList.map(i => i.response.key);
  }
  render() {
    const { fileList } = this.state;
    return (<div>
      <Upload onChange={this.onChange} />
      <div>
        {JSON.stringify(fileList)}
      </div>
    </div>);
  }
}
