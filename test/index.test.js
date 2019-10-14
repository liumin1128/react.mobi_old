/* eslint-env jest */
import { shallow } from 'enzyme';
import React from 'react';
import Page404 from '@/components/Page404';

describe('Page404', () => {
  it('Page404 shows "404"', () => {
    const app = shallow(<Page404 />);
    expect(app.find('div').text()).toEqual('404');
  });
});
