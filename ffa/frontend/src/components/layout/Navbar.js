import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

export class Navbar extends Component {
    render() {
        return (
            <Fragment>
            {/* DEFAULT NAVBAR */}
            <nav className="navbar navbar-expand-sm navbar-light" >
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarToggler">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <a href="/" className="nav-link">
                                <div className="nav-text">
                                    HOME
                                </div>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/about-us" className="nav-link">
                                <div className="nav-text">
                                    ABOUT
                                </div>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/events" className="nav-link">
                                <div className="nav-text">
                                    EVENTS
                                </div>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/range" className="nav-link">
                                <div className="nav-text">
                                    RANGE
                                </div>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/photos" className="nav-link">
                                <div className="nav-text">
                                    PHOTOS
                                </div>
                            </a>
                        </li>                            
                    </ul>
                </div>
            </nav>
            </Fragment>
        )
    }
}

export default Navbar;
