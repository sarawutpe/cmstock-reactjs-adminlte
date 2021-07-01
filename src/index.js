import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import reducers from "./reducers";
import logger from "redux-logger";

const store = createStore(reducers, applyMiddleware(thunk, logger));

const ReduxApp = (
    <Provider store={store} >
        <App/>
    </Provider>
)

ReactDOM.render(ReduxApp, document.getElementById('root'));

