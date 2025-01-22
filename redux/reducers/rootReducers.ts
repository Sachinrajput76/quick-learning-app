// src/redux/reducers/rootReducer.ts

import { combineReducers } from 'redux';
import { videoReducer } from './videoReducer';

export const rootReducer = combineReducers({
  video: videoReducer,
});
