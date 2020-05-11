import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import allReducer from './reducers';
import App from './App';

import './index.scss'
import'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(<App />, document.getElementById('root'));


const store = createStore(
    allReducer ,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

ReactDOM.render(
        <Provider store = {store} clasName="container-fluid">
            <App/>
        </Provider>,
        document.getElementById('root')
    
    )


