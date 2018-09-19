import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import HeaderProfile from './HeaderProfile';

describe('<HeaderProfile />', () => {
  const props = {
    cmsHeader: {
      help: 'AIDE',
    },
  };
  const wrapper = shallow(<HeaderProfile {...props} />);

  it('should render component', () => {
    expect(wrapper).to.have.lengthOf(1);
  });

  it('should have the correct props', () => {
    expect(wrapper.instance().props.cmsHeader).to.deep.equal({
      help: 'AIDE',
    });
  });
});
