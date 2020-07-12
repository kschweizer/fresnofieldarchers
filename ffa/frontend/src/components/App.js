import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import Header from './layout/Header';
import Banner from './layout/Banner';
import Footer from './layout/Footer';

import { Provider } from 'react-redux';
import store from '../store';
import Home from './pages/Home';
import About from './pages/About';
import Membership from './pages/Membership';
import Photos from './pages/Photos';

import '../styles/App.scss';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Fragment>
                        <Header />
                        <div className='container-fluid'>
                            <Switch>                               
                                <Route exact path="/about-us" component={ About } />
                                <Route exact path="/membership" component={ Membership } />
                                <Route exact path="/photos" component={ Photos } />
                                <Route path="/" component={ Home } />
                            </Switch>
                        </div>
                    </Fragment>
                </Router>
            </Provider>
        )
     }

}

ReactDOM.render(<App />, document.getElementById('app'));