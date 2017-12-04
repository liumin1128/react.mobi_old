import React, { Component } from 'react';
import Upload from 'rc-upload';
import { getFileItem } from './utils';

const QINIUURL = 'http://img.react.mobi';
const QINIU_UPLOADURL = 'https://upload-z1.qiniup.com';

// @getQiniuToken
export default class extends Component {
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
    const { onChange } = this.props;
    if (fileList.findIndex(i => i.status !== 'done') === -1) {
      const value = fileList.map(i => `${QINIUURL}/${i.response.key}`);
      if (onChange) {
        onChange(value);
      }
    }
  }
  getValue = () => {
    const { fileList } = this.state;
    if (fileList.findIndex(i => i.status !== 'done') === -1) {
      return fileList.map(i => `${QINIUURL}/${i.response.key}`);
    } else {
      return [];
    }
  }
  clearProgressTimer() {
    clearInterval(this.progressTimer);
  }
  destroy = () => {
    this.setState({
      destroyed: true,
    });
  }
  handleRemove = ({ uid }) => {
    const { fileList } = this.state;
    const idx1 = fileList.findIndex(i => i.uid === uid);
    fileList.splice(idx1, 1);
    this.setState({ fileList });
  }

  render() {
    console.log('this.props');
    console.log(this.props);
    const { qiniuToken: token } = this.props;
    if (this.state.destroyed) {
      return null;
    }
    return (<div className="photos">
      {
        this.state.fileList.map(i => (
          <div className="item" key={i.uid}>
            <div
              className="item-content"
              style={{ backgroundImage: i.status === 'done' ? `url(${QINIUURL}/${i.response.key})` : undefined }}
            />
            <button
              className="item-remove"
              aria-label="Click and Remove this image"
              onClick={() => { this.handleRemove(i); }}
            />
          </div>
        ))
      }
      <Upload
        action={QINIU_UPLOADURL}
        data={{ token }}
        multiple
        component="div"
        supportServerRender
        style={{ display: 'inline-block' }}
        beforeUpload={(file) => {
          // console.log('beforeUpload', file);
        }}
        onStart={(file) => {
          // console.log('onStart');
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
          // onProgress={(e, file) => {
          //   console.log('onProgress', e);
          //   const { fileList } = this.state;
          //   const targetItem = getFileItem(file, fileList);
          //   if (!targetItem) {
          //     return;
          //   }
          //   targetItem.percent = e.percent;
          //   this.onChange({
          //     event: e,
          //     file: { ...targetItem },
          //     fileList,
          //   });
          // }}
        onError={(err) => {
            console.log('onError', err);
          }}
      >
        <div className="item add" />
      </Upload>

      <style jsx>{`
        .photos {
          padding: 8px 0;
        }
        .item {
          width: 70px;
          height: 70px;
          display: inline-block;
          position: relative;
          margin: 8px 8px 0 0;
          border-radius: 5px;
          box-shadow: 0px 0px 3px rgba(0,0,0,0.2);
        }
        .item-content {
          width: 100%;
          height: 100%;
          background-size: cover;
          border-radius: 5px;
        }
        .item-remove {
          background: none;
          border: none;
          width: 25%;
          height: 25%;
          position: absolute;
          right: 5%;
          top: 5%;
          text-align: right;
          vertical-align: top;
          z-index: 2;
          border-radius: 100px;
          background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width='16' height='16' viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Ccircle fill-opacity='.4' fill='%23404040' cx='8' cy='8' r='8'/%3E%3Cpath d='M11.898 4.101a.345.345 0 0 0-.488 0L8 7.511l-3.411-3.41a.345.345 0 0 0-.488.488l3.411 3.41-3.41 3.412a.345.345 0 0 0 .488.488L8 8.487l3.411 3.411a.345.345 0 0 0 .488-.488L8.488 8l3.41-3.412a.344.344 0 0 0 0-.487z' fill='%23FFF'/%3E%3C/g%3E%3C/svg%3E");
          background-size: 100% auto;
        }
        .add {
          // border: 1px rgba(0,0,0,0.1) solid;
          background-size: 50% auto;
          background-repeat: no-repeat;
          background-position: 50% 50%;
          background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTEyMzAxMDg2OTkxIiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjUzMDEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNDgiIGhlaWdodD0iNDgiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQ4NS45ODQ4NjUgNDg1Ljk4NDg2NUgwdjI4LjU4ODk3M2g0ODUuOTg0ODY1djQ4NS45ODQ4NjVoMjguNTg4OTczdi00ODUuOTg0ODY1aDQ4NS45ODQ4NjVWNDg1Ljk4NDg2NWgtNDg1Ljk4NDg2NVYwSDQ4NS45ODQ4NjV2NDg1Ljk4NDg2NXoiIHAtaWQ9IjUzMDIiIGZpbGw9IiNjZGNkY2QiPjwvcGF0aD48L3N2Zz4=");
        }
      `}</style>

    </div>);
  }
}
