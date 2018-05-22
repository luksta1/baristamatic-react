import React from 'react';
import ReactDOM from 'react-dom';
import Intro from './components/Intro';
import App from './components/App'
import { Route, BrowserRouter } from 'react-router-dom'

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route exact path="/" component={Intro} />
            <Route exact path="/brew" component={App} />
        </div>
    </BrowserRouter>
    , document.getElementById('root'));
