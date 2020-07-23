import React, { Component, Fragment } from 'react'

export class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scrolling: false
        }
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    handleScroll(e) {
        if (window.scrollY < 157 && this.state.scrolling == true) {
            this.setState({scrolling: false});
        }
        else if (window.scrollY > 157 && this.state.scrolling == false) {
            this.setState({scrolling: true});
        }
    }
    render() {
        return (
            <Fragment>
            {/* DEFAULT NAVBAR */}
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark" >
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
            {/* STICKY NAVBAR */}
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark navbar-sticky" style={{position: 'fixed', display: this.state.scrolling ? 'block' : 'none', top: 0, width: '100%', zIndex: 999}}>
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
            </Fragment>
        )
    }
}

export default Navbar;
