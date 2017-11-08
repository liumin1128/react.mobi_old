import React, { PureComponent } from 'react';
import { Link } from '../../utils';
import Button from './icon-button';

export default class extends PureComponent {
  render() {
    return (
      <div className="fixed">
        <Link href="/say/create"><Button size={25} icon="quill" color="#fff" /></Link>
        <style jsx>{`
          .fixed {
            width: 55px;
            height: 55px;
            border-radius: 100px;
            background: #409EFF;
            position: fixed;
            bottom: 80px;
            margin: auto;
            right: 25px;
            transition: 0.3s;
            opacity: 0.7;
            box-shadow: 1px 1px 5px rgba(0,0,0,0.3);
          }
        `}
        </style>
      </div>
    );
  }
}
