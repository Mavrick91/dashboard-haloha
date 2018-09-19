import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import DropdownMenu from './DropdownMenu';

describe('<DropdownMenu />', () => {
  const props = {
    items: [
      { id: 0, title: 'Tous les événements' },
      { id: 1, title: 'Mes favoris' },
      { id: 3, title: 'Événements visible' },
      { id: 2, title: 'Événements invisible' },
    ],
  };
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<DropdownMenu {...props} />);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('should render component', () => {
    expect(wrapper).to.have.lengthOf(1);
  });

  it('should have the correct props', () => {
    expect(wrapper.instance().props.items).to.deep.equal(props.items);
  });

  it('the state should have the first items saved', () => {
    expect(wrapper.state().itemSelected).to.deep.equal({
      id: 0,
      title: 'Tous les événements',
    });
  });

  describe('when the dropdown is collapsed', () => {
    it('should not display any item ', () => {
      expect(wrapper.state().listOpen).to.equal(false);
      expect(wrapper.find('.dropdown-menu__wrapper-list')).to.have.lengthOf(0);
    });
  });

  describe('when the dropdown is expanded', () => {
    it('should display 4 items ', () => {
      expect(wrapper.state().listOpen).to.equal(false);
      wrapper.find('.dropdown-menu__wrapper-title').simulate('click');
      expect(wrapper.state().listOpen).to.equal(true);
      expect(wrapper.find('li')).to.have.lengthOf(4);
    });
  });

  describe('when clicking an item', () => {
    it('should update the state', () => {
      expect(wrapper.state().itemSelected).to.equal({
        id: 0,
        title: 'Tous les événements',
      });
      wrapper.find('.dropdown-menu__wrapper-title').simulate('click');
      wrapper
        .find('.dropdown-menu__list-item')
        .at(2)
        .simulate('click');
      expect(wrapper.state().itemSelected).to.deep.equal({
        id: 3,
        title: 'Événements visible',
      });
    });
  });
});
