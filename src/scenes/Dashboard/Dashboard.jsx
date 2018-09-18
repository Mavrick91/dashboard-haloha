import React, { Component } from 'react';
import ButtonUpdate from '../../components/ButtonUpdate';

import Header from '../../components/Header';

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <Header />
        <div>Dashboard</div>
        <ButtonUpdate />
      </div>
    );
  }
}
