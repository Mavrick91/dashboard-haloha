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
  let spyDelete;
  let spyTeam;
  let wrapper;

  beforeEach(() => {
    spyWriteComment = sinon.spy(ExtraOptions.prototype, 'writeComment');
    spyLikeEvent = sinon.spy(ExtraOptions.prototype, 'likeEvent');
    spyCopyInfoEvent = sinon.spy(ExtraOptions.prototype, 'copyInfoEvent');
    spyDelete = sinon.spy(ExtraOptions.prototype, 'delete');
    spyTeam = sinon.spy(ExtraOptions.prototype, 'team');

    wrapper = shallow(<ExtraOptions />);
  });

  afterEach(() => {
    spyWriteComment.restore();
    spyLikeEvent.restore();
    spyCopyInfoEvent.restore();
    spyDelete.restore();
    spyTeam.restore();
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

  it('should trigger `delete` method', () => {
    wrapper
      .find(FontAwesomeIcon)
      .at(3)
      .simulate('click');
    wrapper
      .find('li')
      .at(0)
      .simulate('click');
    expect(spyDelete).calledOnce;
  });

  it('should trigger `team` method', () => {
    wrapper
      .find(FontAwesomeIcon)
      .at(3)
      .simulate('click');
    wrapper
      .find('li')
      .at(1)
      .simulate('click');
    expect(spyTeam).calledOnce;
  });
});
