import React from 'react';
import IconButton from '../form/icon-button';

export default () => (<div>
  <fieldset className="fieldset">
    <legend className="legend">社交账号登录</legend>
    <div className="flex">
      <a href="https://api.react.mobi/oauth/github">
        <IconButton src="http://img.react.mobi/icon/github.svg" />
      </a>
      <a href="https://api.react.mobi/oauth/wechat">
        <IconButton src="http://img.react.mobi/icon/wechat.svg" />
      </a>
      <a href="https://api.react.mobi/oauth/qq">
        <IconButton src="http://img.react.mobi/icon/qq.svg" />
      </a>
      <a href="https://api.react.mobi/oauth/weibo">
        <IconButton src="http://img.react.mobi/icon/weibo.svg" />
      </a>
    </div>
  </fieldset>
  <style jsx>{`
    .fieldset {
      text-align: center;
      border: none;
      fons-size: 12px;
      border-top: 1px solid rgba(0,0,0,0.1);
      margin-top: 30px;
    }
    .legend {
      font-size: 12px;
      color: rgba(0,0,0,0.3);
      padding: 10px;
    }
  `}</style>
</div>);
