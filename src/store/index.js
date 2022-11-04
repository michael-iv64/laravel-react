import { combineReducers } from 'redux';
import Auth from './reducers/auth';
import { allUsersReducer } from './reducers/allUsers';

export default combineReducers({
    'auth': Auth,
    'allUsers': allUsersReducer
});