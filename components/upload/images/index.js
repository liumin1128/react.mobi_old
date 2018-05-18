import React, { PureComponent, Fragment } from 'react';
import { Uploader, UploadField } from '@navjobs/upload';
import uploadToQiniu from '@/hoc/uploadToQiniu';

@uploadToQiniu
export default class UploadImages extends PureComponent {
  render() {
    const { children, token, action, qiniuUrl, onComplete } = this.props;
    return (<Uploader
      request={{
      // fileName: 'file',
      url: action,
      method: 'POST',
      fields: {
        token,
        // extra fields to pass with the request
        // full_name: 'Testing extra fields',
      },
      // headers: {
      //   // custom headers to send along
      //   Authorization: 'Bearer: Test',
      // },
      // use credentials for cross-site requests
      // withCredentials: false,
    }}
      onComplete={({ response, status }) => {
        // console.log('response');
        // console.log(response);

        const { key } = response;
        onComplete(qiniuUrl + key);
      }}
      uploadOnSelection
    >
      {({ onFiles, progress, complete }) => {
        // console.log('progress');
        // console.log(progress);
        // const multiOnFiles = (files) => {
        //   console.log('files');
        //   console.log(files);
        //   Object.keys(files).map(key => onFiles({ [key]: files[key] }));
        //   // files.map(i => onFiles(i));
        // };
        return (
          <UploadField
            onFiles={onFiles}
            // uploadProps={{
            //   multiple: true,
            // }}
          >
            {children}
          </UploadField>
        );
      }

      }
    </Uploader>);
    // return (<Fragment>
    //   {children}
    // </Fragment>);
  }
}
