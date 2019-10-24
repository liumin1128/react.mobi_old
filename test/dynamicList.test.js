// // /* eslint-env jest */
// // import { shallow } from 'enzyme';
// // import React from 'react';
// // import DynamicList from '@/container/Dynamic/List';
// // import DynamicList from '@/container/Dynamic/List';

// // describe('DynamicList', () => {
// //   it('Page404 shows "404"', () => {
// //     const app = shallow(<DynamicList />);
// //     console.log(app);
// //     expect(app.find('div').text()).toEqual('404');
// //   });
// // });


// // https://github.com/zeit/next.js/issues/7479

import React from 'react';
import { render } from '@testing-library/react';
import { createRouter } from 'next/router';
import { RouterContext } from 'next-server/dist/lib/router-context';
import withApollo from '@/lib/apollo';


describe('Basic test', () => {
  it('Renders current user value', async () => {
    const router = createRouter('', { user: 'nikita' }, '', {
      initialProps: {},
      pageLoader: jest.fn(),
      App: jest.fn(),
      Component: jest.fn(),
    });
    const DynamicList = require('@/container/Dynamic/List').default;
    const tree = render(withApollo(
      <RouterContext.Provider value={router}>
        <DynamicList />
      </RouterContext.Provider>,
    ));
    // console.log('tree');
    // console.log(tree.getByText('XxxYyy'));
    expect(tree.getByText(/XxxYyy/i)).toBeInTheDocument();
  });
});
