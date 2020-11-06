import { coinReducer } from '../reducers/reducer';
import { createStore } from 'redux';

export const store = createStore(coinReducer);