import React from 'react';
import chai, { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import DropdownMenu from '../DropdownMenu';
import ResearchEvent from './ResearchEvent';

chai.use(sinonChai);

describe('<ResearchEvent />', () => {
  const props = {
    events: [{ id: 0, name: 'papa' }],
    onClick: sinon.spy(),
  };
  const wrapper = shallow(<ResearchEvent {...props} />);

  it('should render the component', () => {
    expect(wrapper).to.have.lengthOf(1);
  });

  it('should have the correct props', () => {
    expect(wrapper.instance().props.events).to.deep.equal([
      { id: 0, name: 'papa' },
    ]);
  });

  it('should have 2 components <FontAwesomeIcon />', () => {
    expect(wrapper.find(FontAwesomeIcon)).to.have.lengthOf(2);
  });

  it('should have an input', () => {
    expect(wrapper.find('input')).to.have.lengthOf(1);
  });

  it('should have <DropdownMenu />', () => {
    expect(wrapper.find(DropdownMenu)).to.have.lengthOf(1);
  });

  it('should have the correct props for <DropdownMenu />', () => {
    expect(wrapper.find(DropdownMenu).props().items).to.deep.equal([
      { id: 0, name: 'papa' },
    ]);
  });

  describe('when pressing the `plus-circle`', () => {
    it('should trigger the function onClick', () => {
      wrapper
        .find(FontAwesomeIcon)
        .at(1)
        .simulate('click');
      expect(props.onClick).calledOnce;
    });
  });

  it('should trigger the function', () => {});
});
