import React from 'react';

export default () => (<div className="box">
  <img className="logo" src="http://img.react.mobi/icon/react2.svg" alt="" />
  <h1 className="h1">发现知识的社区</h1>
  <style jsx>{`
    .logo {
      width: 70px;
      height: 70px;
      margin: 30px;
      margin-bottom: 0;
    }
    .h1 {
      font-size: 10px;
      color: #409EFF;
      margin: 40px;
      margin-top: 10px;
    }
    .box {
      align-items: center;
      flex-direction: column;
      display: flex;
      justify-content: center;
    }
  `}</style>
</div>);
