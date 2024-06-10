import { combineReducers } from 'redux';
import authReducer from './authReducer'; // Adjust the path as necessary

const rootReducer = combineReducers({
  auth: authReducer,
  // other reducers can be added here
});

export default rootReducer;
