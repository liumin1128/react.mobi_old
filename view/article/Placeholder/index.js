import React, { PureComponent } from 'react';
import ContentLoader from 'react-content-loader';

export default class Placeholder extends PureComponent {
  render() {
    return (
      <div style={{ background: '#fff' }}>
        <ContentLoader
          height="350"
          width="635"
          speed={5}
          primaryColor="#f3f3f3"
          secondaryColor="#ecebeb"
          preserveAspectRatio=""
        >
          <circle cx="44" cy="36" r="20" />
          <rect x="80" y="16" rx="5" ry="0" width="229" height="18" />
          <rect x="80" y="40" rx="5" ry="0" width="150" height="14" />
          <rect x="24" y="88" rx="5" ry="0" width="400" height="28" />
          <rect x="24" y="140" rx="5" ry="0" width="587" height="16" />
          <rect x="24" y="164" rx="5" ry="0" width="587" height="16" />
          <rect x="24" y="188" rx="5" ry="0" width="587" height="16" />
          <rect x="24" y="212" rx="5" ry="0" width="587" height="16" />
          <rect x="24" y="236" rx="5" ry="0" width="200" height="16" />
          <rect x="24" y="296" rx="5" ry="0" width="80" height="48" />
          <rect x="112" y="296" rx="5" ry="0" width="48" height="48" />
        </ContentLoader>
      </div>
    );
  }
}
