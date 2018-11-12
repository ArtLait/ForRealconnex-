import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App/App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { store } from './_helpers/store';
import { createBrowserHistory } from 'history';
import { syncHistoryWithStore } from 'react-router-redux';
import { BrowserRouter as Router } from 'react-router-dom';

const history = syncHistoryWithStore(createBrowserHistory(), store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
