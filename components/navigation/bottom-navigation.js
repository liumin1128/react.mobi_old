import React from 'react';
import { PureComponent, Router } from '../../utils';
import BottomNavigationButton from './bottom-navigation-button';

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
      active: true,
    }, {
      label: '发现',
      icon: 'explore',
      value: '/say/create',
    }, {
      label: '发现',
      icon: 'explore',
      value: '/user',
    }, {
      label: '发现',
      icon: 'explore',
      value: '/user',
    }];
  }
  render() {
    const { showLabels } = this.state;
    return (<div className="navbottom">
      {this.nav.map(i => <BottomNavigationButton showLabels={showLabels} {...i} />)}
      <style jsx>{`
        .navbottom {
          position: fixed;
          bottom: 0;
          left: 0;
          width: 100%;
          background: #fff;
          box-shadow: 0 0 3px rgba(0,0,0,0.1);
          height: 60px;
          display: flex;
        }
      `}</style>
    </div>);
  }
}

