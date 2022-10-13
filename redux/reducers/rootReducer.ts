import { combineReducers } from 'redux';

import modal from './components/modal';
import posts from './posts';

const rootReducer = combineReducers({
  modal,
  posts
});

export default rootReducer;
