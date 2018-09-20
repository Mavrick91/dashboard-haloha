import React from 'react';
import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faTh,
  faSearch,
  faPlusCircle,
  faAngleUp,
  faAngleDown,
  faHeart,
  faEllipsisH,
  faPen,
  faClone,
} from '@fortawesome/free-solid-svg-icons';

import AppContainer from './AppContainer';

import './css/index.css';

library.add(
  faTh,
  faSearch,
  faPlusCircle,
  faAngleUp,
  faAngleDown,
  faHeart,
  faEllipsisH,
  faPen,
  faClone
);

ReactDOM.render(<AppContainer />, document.getElementById('root'));
