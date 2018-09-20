import React from 'react';
import { shallow } from 'enzyme';
import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ExtraOptions from './ExtraOptions';

chai.use(sinonChai);

describe('<ExtraOptions />', () => {
  let spyWriteComment;
  let spyLikeEvent;
  let spyCopyInfoEvent;
  let spyExpandOptions;
  let wrapper;

  beforeEach(() => {
    spyWriteComment = sinon.spy(ExtraOptions.prototype, 'writeComment');
    spyLikeEvent = sinon.spy(ExtraOptions.prototype, 'likeEvent');
    spyCopyInfoEvent = sinon.spy(ExtraOptions.prototype, 'copyInfoEvent');
    spyExpandOptions = sinon.spy(ExtraOptions.prototype, 'expandOptions');

    wrapper = shallow(<ExtraOptions />);
  });

  afterEach(() => {
    spyWriteComment.restore();
    spyLikeEvent.restore();
    spyCopyInfoEvent.restore();
    spyExpandOptions.restore();
  });

  it('should render the component', () => {
    expect(wrapper).to.have.lengthOf(1);
  });

  it('should have 4 icon', () => {
    expect(wrapper.find(FontAwesomeIcon)).to.have.lengthOf(4);
  });

  it('should trigger `writeComment` method', () => {
    wrapper
      .find(FontAwesomeIcon)
      .at(0)
      .simulate('click');
    expect(spyWriteComment).calledOnce;
  });

  it('should trigger `likeEvent` method', () => {
    wrapper
      .find(FontAwesomeIcon)
      .at(1)
      .simulate('click');
    expect(spyLikeEvent).calledOnce;
  });

  it('should trigger `copyInfoEvent` method', () => {
    wrapper
      .find(FontAwesomeIcon)
      .at(2)
      .simulate('click');
    expect(spyCopyInfoEvent).calledOnce;
  });

  it('should trigger `expandOptions` method', () => {
    wrapper
      .find(FontAwesomeIcon)
      .at(3)
      .simulate('click');
    expect(spyExpandOptions).calledOnce;
  });
});
