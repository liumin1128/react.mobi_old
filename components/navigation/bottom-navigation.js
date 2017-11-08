import React from 'react';
import { PureComponent, Link } from '../../utils';
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
      value: '/me',
    }];
  }
  render() {
    const { showLabels } = this.state;
    return (<div className="navbottom">
      {this.nav.map(({ value, ...other }) => (
        <Link href={value} key={value}>
          <BottomNavigationButton
            {...other}

            onChange={this.test}
            showLabels={showLabels}
          />
        </Link>
      ))}
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
      `}</style>
    </div>);
  }
}

