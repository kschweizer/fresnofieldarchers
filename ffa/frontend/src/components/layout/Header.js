import React, { Component } from 'react';
import { Banner } from './Banner';
import { Navbar } from './Navbar';

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
                <Navbar />
            </div>
        )
    }
}

export default Header