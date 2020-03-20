import React, { PureComponent } from 'react';
import Affix from '@/components/Affix';
import Blogrol from './Blogrol';
import Footer from './Footer';
import Code from './Code';
import Edite from './edite';

export default class index extends PureComponent {
  render() {
    return (
      <div>
        <Affix offsetTop={80}>
          <Edite />
          <br />
          <br />
          <Code />
          <br />
          <Blogrol />
          <Footer />
        </Affix>
      </div>
    );
  }
}
