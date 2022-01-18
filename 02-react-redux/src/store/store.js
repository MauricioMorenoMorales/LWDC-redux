import { createStore } from 'redux';
import { CounterReducer } from './reducers/Counter.reducer';

export const store = createStore(CounterReducer);
