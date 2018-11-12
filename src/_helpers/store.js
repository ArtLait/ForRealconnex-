import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { routerReducer } from 'react-router-redux';
import { rootReducer } from '../_reducers/root';
import PromiseMiddleware from '../middleware/promise.middleware';

const loggedMiddleware = createLogger();

export const store = createStore(
    combineReducers({
        rootReducer: rootReducer,
        routing: routerReducer
    }),
    compose(
        applyMiddleware(
            thunkMiddleware,
            loggedMiddleware,
            PromiseMiddleware
        )
    )
);