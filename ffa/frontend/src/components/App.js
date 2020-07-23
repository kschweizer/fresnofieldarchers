// REACT
import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Alert Provider
import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

// Main components
import Header from './layout/Header';
import Footer from './layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Membership from './pages/Membership';
import Photos from './pages/Photos';
import Alerts from './layout/Alerts';

// Redux Provider and store
import { Provider } from 'react-redux';
import store from '../store';

// STYLES
import '../styles/App.scss';

// Alert Options
const alertOptions = {
    timeout: 5000,
    position: 'bottom center'
}

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <AlertProvider template={AlertTemplate}
                {...alertOptions}>
                <Router>
                    <Fragment>                   
                        <Header />
                        <Alerts />
                        <div className='container-fluid p-0'>
                            <Switch>                               
                                <Route exact path="/about-us" component={ About } />
                                <Route exact path="/membership" component={ Membership } />
                                <Route exact path="/photos" component={ Photos } />
                                <Route path="/" component={ Home } />
                            </Switch>
                        </div>
                        <Footer />
                    </Fragment>
                </Router>
                </AlertProvider>
            </Provider>
        )
     }

}

ReactDOM.render(<App />, document.getElementById('app'));