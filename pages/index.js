import React from 'react';
import Login from '../components/login';

export default () => (<div>
  <Login />
  <h1 className="h1">index</h1>
  <style jsx>{`
    .h1 {
      color: red;
      font-size: 30px;
    }
  `}</style>
</div>);
