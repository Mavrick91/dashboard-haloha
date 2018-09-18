import React from 'react';
import { shallow } from 'enzyme';
import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

import ButtonUpdate from './ButtonUpdate';

chai.use(sinonChai);

describe('<ButtonUpdate />', () => {
  const spy = sinon.spy();
  const wrapper = shallow(<ButtonUpdate onClick={spy} />);

  it('should render the component', () => {
    expect(wrapper).to.have.lengthOf(1);
  });

  describe('when pressing the button', () => {
    it('should call the function', () => {
      wrapper.find('.button-update').simulate('click');
      expect(spy).calledOnce;
    });
  });
});
