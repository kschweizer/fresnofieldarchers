import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <ul className="navbar-nav ml-auto mr-2 mt-2 mt-lg-0">
                        <li class="nav-item">
                            <a class="nav-link" href="">Membership</a>
                        </li>
                    </ul>
                    <a className="navbar-brand mx-2" href="">
                        <img src="/static/frontend/logo.png" width="80" height="80" alt=""/>
                    </a>
                    <ul className="navbar-nav mr-auto ml-2 mt-2 mt-lg-0">
                        <li class="nav-item">
                            <a class="nav-link" href="">About</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )

    }
}

export default Header