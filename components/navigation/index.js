import React from 'react';
import { PureComponent, Link, connect } from '../../utils';
import BottomNavigationButton from './bottom-navigation-button';
import Container from '../layout/container';
import Input from '../form/input';
@connect(({ common }) => ({
  currentPath: common.currentPath,
}))
export default class extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      showLabels: false,
    };
    this.nav = [{
      label: '发现',
      icon: 'explore',
      value: '/',
    }, {
      label: '收藏',
      icon: 'favorite',
      value: '/article',
    }, {
      label: '消息',
      icon: 'message',
      value: '/user',
    }, {
      label: '我',
      icon: 'account',
      value: '/me',
    }];
    this.nav2 = [
      {
        label: '动态',
        value: '/',
      }, {
        label: '文章',
        value: '/article',
      }, {
        label: '发现',
        value: '/exp',
      },
    ];
  }

  render() {
    const { showLabels } = this.state;
    const { currentPath = 'xxx' } = this.props;
    return (
      <div className="nav">
        <div className="navbottom">
          {this.nav.map(({ value, ...other }) => (
            <Link href={value} key={value}>
              <BottomNavigationButton
                {...other}
                active={currentPath === value}
                onChange={this.test}
                showLabels={showLabels}
              />
            </Link>
          ))}
        </div>
        <div className="navtop">
          {
          //   <div className="logo">
          //   <img src="http://img.react.mobi/icon/react2.svg" alt="" />
          // </div>
        }
          <Container>
            <div className="content">
              <div className="nav2">
                {this.nav2.map(i => (
                  <Link href={i.value} key={i.svalue}>
                    <button
                      className={`btn ${currentPath === i.value ? 'active' : undefined}`}
                    >
                      {i.label}
                    </button>
                  </Link>
                ))}
              </div>
              <div className="search">
                <Input
                  placeholder="搜索话题、文章、好友"
                  style={{
                    width: 300,
                    margin: 0,
                    paddingLeft: 30,
                    background: 'rgba(0,0,0,0.05)',
                    borderRadius: 5,
                    boxShadow: 'none',
                    border: '1px rgba(0,0,0,0.07) solid',
                  }}
                />
              </div>
              <div className="login">
                <Link href="register">
                  <button className="btn btn1" >
                    注册
                  </button>
                </Link>
                <Link href="login">
                  <button className="btn" >
                    登录
                  </button>
                </Link>
              </div>
            </div>
          </Container>
        </div>
        <style jsx>{`
          .navbottom {
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            background: #fff;
            box-shadow: 0 0 3px rgba(0,0,0,0.1);
            height: 55px;
            display: flex;
          }
          .navtop {
            position: fixed;
            display: none;
            top: 0;
            left: 0;
            width: 100%;
            background: #fff;
            box-shadow: 0 0 3px rgba(0,0,0,0.1);
            height: 55px;
          }
          .navtop .logo {
            height: 100%;
            width: 100px;
            display: flex;
            background: red;
            align-items: center;
            justify-content: center;
          }
          .navtop .logo img {
            width: 30px;
          }
          .content {
            display: flex;
            justify-content: space-between;
            /* border: 1px red solid; */
            width: 100%;
          }
          .nav2 {
            // display: flex;
            // background: #777;
            width: 100%;
            height: 55px;
          }
          .btn {
            width: 50px;
            height: 100%;
            border: 0;
            background: none;
            margin-right: 24px;
            font-size: 18px;
            border-radius: 0;
            font-weight: bold;
            color: rgba(0,0,0,.34);
          }
          .nav2 .btn.active {
            border-bottom: 4px #2196f3 solid;
            box-sizing: border-box;
            color: #2196f3;
          }
          .search {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            height: 55px;
          }
          .login {
            margin-left: 32px;
            display: flex;
          }
          .login .btn {
            font-weight: 400;
            width: 80px;
            margin: 0;
          }
          .login .btn1{
            background: #2196f3;
            color:#fff;
          }
          @media (min-width: 768px){
            .navbottom {
              display: none;
            }
            .navtop {
              display:block;
            }
          }
        `}</style>
      </div>
    );
  }
}

