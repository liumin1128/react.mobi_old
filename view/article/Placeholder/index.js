import React, { PureComponent } from 'react';
import ContentLoader from 'react-content-loader';

export default class Placeholder extends PureComponent {
  render() {
    return (
      <div style={{ background: '#fff' }}>
        <ContentLoader
          height="350"
          width="635"
          uniquekey="aaaa" // 应对ssr
          // speed={5}
          // animate={false}
          // primaryColor="#f3f3f3"
          // secondaryColor="#ecebeb"
          // preserveAspectRatio=""
        >
          <circle cx="44" cy="40" r="22" />
          <rect x="80" y="20" rx="5" ry="0" width="150" height="16" />
          <rect x="80" y="42" rx="5" ry="0" width="100" height="14" />
          <rect x="24" y="98" rx="5" ry="0" width="400" height="22" />
          <rect x="24" y="140" rx="5" ry="0" width="587" height="16" />
          <rect x="24" y="164" rx="5" ry="0" width="587" height="16" />
          <rect x="24" y="188" rx="5" ry="0" width="587" height="16" />
          <rect x="24" y="212" rx="5" ry="0" width="587" height="16" />
          <rect x="24" y="236" rx="5" ry="0" width="200" height="16" />
          <rect x="24" y="303" rx="5" ry="0" width="80" height="40" />
          <rect x="112" y="303" rx="5" ry="0" width="40" height="40" />
        </ContentLoader>
      </div>
    );
  }
}
