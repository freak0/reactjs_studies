/**
 * Created by elton on 04/01/17.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory } from 'react-router';

import Layout from './pages/Layout';
import TodosPage from './pages/TodosPage';
import About from './pages/About';
import Contact from './pages/Contact';

const app = document.getElementById('app');

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={About}/>
            <Route path="todos" component={TodosPage}/>
            <Route path="contact" component={Contact}/>
        </Route>
    </Router>,
    app);