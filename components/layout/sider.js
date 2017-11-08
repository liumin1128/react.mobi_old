import React from 'react';

export default ({ children }) => (
  <div className="side">
    {children}
    <style jsx>{`
      .side{
        width: 100%;
        clear: both;
        max-width: 760px;
        margin: 0 auto;
      }
      @media (max-width: 769px){
        .side{
          padding: 20px;
          box-sizing: border-box;
        }
      }
      @media (min-width: 1110px){
        .side{
          width: 300px;
        }
      }
    `}</style>
  </div>
);

