import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';

import Header from './layout/Header';
import Banner from './layout/Banner';

class App extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <div className="container">
                    <Banner />
                </div>
                
            </Fragment>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));