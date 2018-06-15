import expect from 'expect.js';
import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import OtherFormField from '../src';

Enzyme.configure({ adapter: new Adapter() });

describe('OtherFormField', () => {
  it('should render correctly', () => {
    mount(<OtherFormField />);
  });
});
