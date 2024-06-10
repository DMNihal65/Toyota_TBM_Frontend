import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk'; // Update this line
import rootReducer from './reducers/rootReducer';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
