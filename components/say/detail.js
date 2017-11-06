import React from 'react';
import { connect } from 'react-redux';
import Comment from '../comment';

function mapStateToProps({ say }) {
  const { detail } = say;
  return detail;
}

export default connect(mapStateToProps)(({
  title, content, photos, id,
}) => {
  return (<div className="body">
    <h1>{title}</h1>
    <img src={photos[0]} className="cover" alt="" />
    <div className="content">{content}</div>
    <Comment id={id} />
    <style jsx>{`
      .body {
        padding: 20px;
      }
      .body img {
        width: 100%;
      }
    `}</style>
  </div>);
});

