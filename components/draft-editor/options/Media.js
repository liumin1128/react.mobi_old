import React, { PureComponent, createRef } from 'react';

const Audio = (props) => {
  return (<audio
    controls
    src={props.src}
    // style={{
    //   maxWidth: '100%',
    //   border: '1px red solid',
    // }}
  />);
};

const Image = (props) => {
  return (<img
    src={props.src}
    // style={styles.media}
    style={{
      maxWidth: '100%',
      margin: '0 auto',
      maxHeight: 500,
      display: 'block',
      // border: '1px red solid',
    }}
    alt=""
  />);
};

const Video = (props) => {
  return (<video
    controls
    src={props.src}
    // style={styles.media}
  />);
};

export default (props) => {
  const entity = props.contentState.getEntity(props.block.getEntityAt(0));
  const { src } = entity.getData();
  const type = entity.getType();
  switch (type) {
    case 'audio': return <Audio src={src} />;
    case 'image': return <Image src={src} />;
    case 'video': return <Video src={src} />;
    case 'test': return <h1>9999</h1>;
    default: return null;
  }
};
