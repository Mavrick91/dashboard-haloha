import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import HeaderProfile from './HeaderProfile';

describe('<HeaderProfile />', () => {
  const wrapper = shallow(<HeaderProfile />);

  it('should render component', () => {
    expect(wrapper).to.have.lengthOf(1);
  });
});
