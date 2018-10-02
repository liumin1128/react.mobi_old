import React from 'react';

/* eslint-disable jsx-a11y/media-has-caption */

const Audio = ({ src }) => {
  return (
    <audio
      controls
      src={src}
    />
  );
};

const Image = ({ src }) => {
  return (
    <img
      src={src}
      style={{
        maxWidth: '100%',
        margin: '0 auto',
        maxHeight: 500,
        display: 'block',
      }}
      alt=""
    />
  );
};

const Video = ({ src }) => {
  return (
    <video
      controls
      src={src}
    />
  );
};
/* eslint-enable jsx-a11y/media-has-caption */


export default (props) => {
  const entity = props.contentState.getEntity(props.block.getEntityAt(0));
  const { src } = entity.getData();
  const type = entity.getType();
  switch (type) {
    case 'audio': return <Audio src={src} />;
    case 'image': return <Image src={src} />;
    case 'video': return <Video src={src} />;
    default: return null;
  }
};
