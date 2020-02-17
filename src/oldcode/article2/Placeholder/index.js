import React, { PureComponent } from 'react';
import ContentLoader from 'react-content-loader';

export default class Placeholder extends PureComponent {
  render() {
    return (
      <div style={{ background: '#fff' }}>
        <ContentLoader
          height="326"
          width="635"
          uniquekey="aaaa" // 应对ssr
          // speed={5}
          // animate={false}
          // primarycolor="#f3f3f3"
          // secondarycolor="#ecebeb"
          // preserveAspectRatio=""
        >
          <circle cx="44" cy="40" r="22" />
          <rect x="80" y="20" rx="5" ry="0" width="150" height="16" />
          <rect x="80" y="42" rx="5" ry="0" width="100" height="14" />
          <rect x="24" y="90" rx="5" ry="0" width="400" height="22" />
          <rect x="24" y="132" rx="5" ry="0" width="587" height="16" />
          <rect x="24" y="156" rx="5" ry="0" width="587" height="16" />
          <rect x="24" y="180" rx="5" ry="0" width="587" height="16" />
          <rect x="24" y="204" rx="5" ry="0" width="587" height="16" />
          <rect x="24" y="228" rx="5" ry="0" width="200" height="16" />
          <rect x="24" y="279" rx="5" ry="0" width="80" height="40" />
          <rect x="112" y="279" rx="5" ry="0" width="40" height="40" />
        </ContentLoader>
      </div>
    );
  }
}
