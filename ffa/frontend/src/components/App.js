// REACT
import React, { Component, Fragment, Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';

// Routing
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from '../common/PrivateRoute';

// Alert Provider
import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

// Main components
import Header from './layout/Header';
import Footer from './layout/Footer';
import Alerts from './layout/Alerts';
import Login from './accounts/Login';
import Account from './accounts/Account';

// Redux Provider and store
import { Provider } from 'react-redux';
import store from '../store';
import { loadUser } from '../actions/auth';

// STYLES and Frontend tools
import '../styles/App.scss';

// Alert Options
const alertOptions = {
    timeout: 5000,
    position: 'bottom center'
}

class App extends Component {

    componentDidMount() {
        store.dispatch(loadUser());
    }

    render() {
        return (
            <Provider store={store}>
                <AlertProvider template={AlertTemplate}
                {...alertOptions}>
                <Router>
                    
                    <Fragment>      
                        <div className="wrapper">    
                            <Header />
                            <Alerts />
                            <Suspense fallback={<div>Loading...</div>}>
                            <Switch>
                                <Route exact path="/" component={lazy(() => import('./pages/Home'))} />                               
                                <Route exact path="/about-us" component={lazy(() => import('./pages/About'))} />
                                <Route exact path="/events" component={lazy(() => import('./pages/Events'))} />
                                <Route exact path="/photos" component={lazy(() => import('./pages/Photos'))} />
                                <Route exact path="/login" component={Login} />
                                <PrivateRoute exact path="/account" component={Account} />
                                <PrivateRoute path="/editor" component={lazy(() => import('./admin/Editor'))} />
                            </Switch>    
                            </Suspense>                       
                            <Footer />
                        </div>
                    </Fragment>
                    
                </Router>
                </AlertProvider>
            </Provider>
        )
     }

}

ReactDOM.render(<App />, document.getElementById('app'));