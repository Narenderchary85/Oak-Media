import {legacy_createStore as createStore , applyMiddleware} from 'redux';
import {thunk} from "redux-thunk";
import {combineReducers} from 'redux';
import { usersReducers } from './usersReducers';
import { postReducers } from './postReducers';

const middleware=[thunk];
const reducers=combineReducers({
    users:usersReducers,
    posts:postReducers
});

const store=createStore(reducers,applyMiddleware(...middleware));

export default store;