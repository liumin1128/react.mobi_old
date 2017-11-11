import React, { PureComponent } from 'react';
import { connect } from '../../utils';
import Icon from '../icon';
import Avatar from '../avatar';

@connect(({ user }) => ({
  user,
}))
export default class extends PureComponent {
  componentWillMount() {
    this.props.dispatch({
      type: 'user/getUserInfo',
    });
  }
  render() {
    const { user } = this.props;
    const { userInfo = {} } = user;
    return (
      <div className="me">

        <div className="userinfo">
          <div className="info">
            <h1 className="nickname">{userInfo.nickname}</h1>
            <p className="meta">用户简洁</p>
          </div>
          <Avatar src={userInfo.avatarUrl} size={75} />
        </div>

        <div className="ul">
          <div className="li">
            <div className="icon">
              <Icon icon="mine" size={20} />
            </div>
            <div className="lable" >消息中心</div>
            <div className="value">89</div>
          </div>
          <div className="li">
            <div className="icon">
              <Icon icon="mine" size={20} />
            </div>
            <div className="lable" >收藏夹</div>
            <div className="value">67</div>
          </div>
          <div className="li">
            <div className="icon">
              <Icon icon="mine" size={20} />
            </div>
            <div className="lable" >阅读历史</div>
            <div className="value">121</div>
          </div>

        </div>

        <div className="ul">

          <div className="li">
            <div className="icon">
              <Icon icon="feedback" size={20} />
            </div>
            <div className="lable">意见反馈</div>
            <div className="value" />
          </div>

          <div className="li">
            <div className="icon">
              <Icon icon="setting" size={20} />
            </div>
            <div className="lable">设置</div>
            <div className="value" />
          </div>
        </div>
        <style jsx>{`
          .userinfo {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 40px 20px;
            background: #fff;
            border-bottom: 1px rgba(0,0,0,0.05) solid;
            margin-bottom: 10px;
          }
          .nickname {
            font-size: 20px;
          }
          .meta {
            font-size: 12px;
            color: #666;
          }
          .ul {
            margin-bottom: 10px;
            border-top: 1px rgba(0,0,0,0.05) solid;
            background: #fff;
          }
          .li {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px rgba(0,0,0,0.05) solid;
            padding: 10px 20px;
            position: relative;
            padding-left: 50px;
          }
          .icon {
            position: absolute;
            left: 16px;
          }
          .lable {

          }
          .value {
            color: rgba(0,0,0,0.6);
            font-size: 0.9em;
          }
        `}</style>
      </div>
    );
  }
}

