// import { createStore, applyMiddleware } from "redux";
// import { reducers } from "../reducer";
// import thunk from 'redux-thunk';

// import createHistory from "history/createBrowserHistory";
// export default createHistory();
import { createStore, applyMiddleware } from 'redux';
import { reducers } from '../redux/reducers';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { api } from '../service/api';
import { Toast } from '../service/toast';

export const store = createStore(reducers, applyMiddleware(thunk.withExtraArgument({ api, Toast }), logger));
export const history = require('history').createBrowserHistory({});
