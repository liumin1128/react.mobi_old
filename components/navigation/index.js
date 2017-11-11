import React from 'react';
import { PureComponent, Link, connect } from '../../utils';
import BottomNavigationButton from './bottom-navigation-button';

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
      value: '/favorite',
    }, {
      label: '消息',
      icon: 'message',
      value: '/user',
    }, {
      label: '我',
      icon: 'account',
      value: '/me',
    }];
  }
  render() {
    const { showLabels } = this.state;
    const { currentPath = 'xxx' } = this.props;
    return (
      <div className="nav">
        {currentPath}
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
        {
        //   <div className="navtop">
        //   <h1>header</h1>
        // </div>
      }
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

