import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from "redux-thunk";

import placesReducer from './reducers/places';
import uiReducer from './reducers/ui';
import authReducer from './reducers/auth';
import partiesReducer from './reducers/parties';

const rootReducer = combineReducers({
    places: placesReducer,
    ui: uiReducer,
    auth: authReducer,
    parties: partiesReducer
});

let composeEnhancers = compose;

if (process.env._DEV_) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
}

const configureStore = () => {
    return createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
};

export default configureStore;