import React, { Component } from 'react';
import { Banner } from './Banner';

export class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="logo-container container-fluid  bg-dark">
                    <div className="row justify-content-center" href="/">
                            <a href="/">
                                <img src="https://fresnofieldarchers.s3-us-west-1.amazonaws.com/images/ffalogo.svg" className="logo" alt=""/> 
                            </a>
                    </div>
                </div>
                <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="/about-us">
                                    <div className="nav-text">
                                        ABOUT
                                    </div>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="">
                                    <div className="nav-text">
                                        EVENTS
                                    </div>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/membership">
                                    <div className="nav-text">
                                        MEMBERSHIP
                                    </div>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/photos">
                                    <div className="nav-text">
                                        PHOTOS
                                    </div>
                                </a>
                            </li>                            
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Header