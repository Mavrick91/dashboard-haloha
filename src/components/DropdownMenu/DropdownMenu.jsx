// @flow

import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type Item = {
  id: number,
  name: string,
};

type Props = {
  items: Array<Item>,
};

type State = {
  listOpen: boolean,
  items: Array<Item>,
  itemSelected: Item,
};

export default class DropdownMenu extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      listOpen: false,
      items: props.items,
      itemSelected: props.items[0],
    };
  }

  // eslint-disable-next-line
  UNSAFE_componentWillMount() {
    document.addEventListener('mousedown', this.handleClickOutside, false);
  }

  componentWillUnmount() {
    document.addEventListener('mousedown', this.handleClickOutside, false);
  }

  handleClickOutside = (e: *) => {
    // $FlowFixMe
    if (!this.node.contains(e.target))
      this.setState({
        listOpen: false,
      });
  };

  toggleList() {
    this.setState(prevState => ({
      listOpen: !prevState.listOpen,
    }));
  }

  render() {
    const { listOpen, items, itemSelected } = this.state;

    return (
      <div
        className="dropdown-menu"
        ref={(node: *) => {
          // $FlowFixMe
          this.node = node;
        }}
      >
        <div
          className="dropdown-menu__wrapper-title"
          onClick={() => this.toggleList()}
        >
          <div className="dropdown-menu__selected-item">
            {itemSelected.name}
          </div>
          <FontAwesomeIcon
            icon={`${listOpen ? 'angle-up' : 'angle-down'}`}
            size="2x"
          />
        </div>
        {listOpen && (
          <div className="dropdown-menu__wrapper-list">
            <ul className="dropdown-menu__list">
              {items.map((item: Item) => (
                <li
                  className="dropdown-menu__list-item"
                  key={item.id}
                  onClick={() =>
                    this.setState({
                      itemSelected: item,
                      listOpen: false,
                    })
                  }
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
}
