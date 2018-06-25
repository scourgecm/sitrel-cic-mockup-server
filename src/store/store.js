import { createStore } from 'redux';
import { discadorApp } from './reducers';

export const store = createStore(discadorApp);
