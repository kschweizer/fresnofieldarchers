// REACT
import React, { Component, Fragment } from 'react';
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
import Home from './pages/Home';
import About from './pages/About';
import Events from './pages/Events';
import Membership from './pages/Membership';
import Range from './pages/Range';
import Photos from './pages/Photos';
import Alerts from './layout/Alerts';
import Login from './accounts/Login';
import Register from './accounts/Register';
import Account from './accounts/Account';

// Redux Provider and store
import { Provider } from 'react-redux';
import store from '../store';
import { loadUser } from '../actions/auth';

// STYLES
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
                            <Switch>
                                <Route exact path="/" component={Home} />                               
                                <Route exact path="/about-us" component={About} />
                                <Route exact path="/events" component={Events} />
                                <Route exact path="/membership" component={Membership} />
                                <Route exact path="/range" component={Range} />
                                <Route exact path="/photos" component={Photos} />
                                <Route exact path="/register" component={Register} />
                                <Route exact path="/login" component={Login} />
                                <PrivateRoute exact path="/account" component={Account} />
                                
                            </Switch>                           
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