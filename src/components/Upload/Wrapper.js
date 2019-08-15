import React, { PureComponent } from 'react';
import RcUpload from 'rc-upload';
import Wrapper from '@/components/Loading/Wrapper';
import uploadToQiniu from './uploadToQiniu';

function getFileItem(file, fileList) {
  const matchKey = file.uid !== undefined ? 'uid' : 'name';
  return fileList.filter(item => item[matchKey] === file[matchKey])[0];
}

@uploadToQiniu
export default class PictureUploadWrapper extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      fileList: [],
      destroyed: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    if ('fileList' in nextProps) {
      this.setState({
        fileList: nextProps.fileList || [],
      });
    }
  }


  onChange = ({ fileList }, updateState = true) => {
    if (!('fileList' in this.props) && updateState) {
      this.setState({ fileList });
    }
    const { onChange, qiniuUrl } = this.props;
    if (fileList.findIndex(i => i.status !== 'done') === -1) {
      const value = fileList.map(i => `${qiniuUrl}/${i.response.key}`);
      this.setState({
        fileList: [],
      }, () => {
        if (onChange) {
          onChange(value);
        }
      });
    }
  }

  // getValue = (fileList) => {
  //   const { qiniuUrl } = this.props;
  //   if (fileList.findIndex(i => i.status !== 'done') === -1) {
  //     return fileList.map(i => `${qiniuUrl}/${i.response.key}`);
  //   } else {
  //     return [];
  //   }
  // }


  destroy = () => {
    this.setState({
      destroyed: true,
    });
  }

  componentDidUnMount() {
    this.destroy();
    this.clearProgressTimer();
  }

  clearProgressTimer() {
    clearInterval(this.progressTimer);
  }


  render() {
    const { destroyed } = this.state;
    if (destroyed) return null;

    const {
      data: { loading, qiniuToken = {} },
      action, children,
      onChange,
      qiniuUrl,
      ...props
    } = this.props;

    // return children;

    if (loading) return <Wrapper loading>{children}</Wrapper>;

    const { token } = qiniuToken;

    return (

      <RcUpload
        supportServerRender
        action={action}
        data={{ token }}
        onStart={(file) => {
          const nextFileList = this.state.fileList.concat();
          const targetItem = {
            ...file,
            status: 'uploading',
            percent: 0,
          };
          nextFileList.push(targetItem);
          this.onChange({
            file: targetItem,
            fileList: nextFileList,
          });
        }}
        onSuccess={(response, file) => {
          // console.log('onSuccess');
          const { fileList } = this.state;
          // console.log(fileList);
          this.clearProgressTimer();
          try {
            if (typeof response === 'string') {
              response = JSON.parse(response);
            }
          } catch (e) { /* do nothing */
          }
          const targetItem = getFileItem(file, fileList);
          // console.log('targetItem');
          // console.log(targetItem);
          // removed
          if (!targetItem) {
            return;
          }
          targetItem.status = 'done';
          targetItem.response = response;

          this.onChange({
            file: { ...targetItem },
            fileList,
          });
        }}
        onError={(err) => {
          console.log('onError', err);
        }}
        {...props}
      >
        {children}
      </RcUpload>
    );
  }
}
