import React, { PureComponent } from 'react';
import Affix from '@/components/Affix';
import Blogrol from '@/components/Blogrol';
import Edite from './edite';

export default class index extends PureComponent {
  render() {
    return (
      <div>
        <Affix offsetTop={80}>
          <Edite />
          <Blogrol />
        </Affix>
      </div>
    );
  }
}
