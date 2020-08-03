import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Navbar } from './Navbar';
import { Link } from 'react-router-dom';
import { logout } from '../../actions/auth';

export class Header extends Component {
    static propTypes = {
        auth: PropTypes.object.isRequired,
        logout: PropTypes.func.isRequired
    }

    render() {
        const { isAuthenticated, user } = this.props.auth;
        const authLinks = (
            <div className="container-fluid">
                <div className="row">
                    <div className="ml-auto">
                        <button 
                        className="btn btn-info btn-sm" 
                        onClick={this.props.logout}>
                            Logout
                        </button>                       
                    </div>
                </div>
            </div>
        );

        const guestLinks = (
            <div className="container-fluid">
                <div className="row">
                    <button className="btn btn-primary ml-auto">
                        <Link to="/login">
                            Login
                        </Link>                        
                    </button>
                </div>
            </div>
        );

        return (
            <div className="header">
                { isAuthenticated? authLinks : guestLinks }
                <div className="logo-container container-fluid">
                    <Link to="/" className="row justify-content-center">
                        <img src="https://fresnofieldarchers.s3-us-west-1.amazonaws.com/images/ffalogo.svg" className="logo" alt=""/> 
                    </Link>
                </div>
                <Navbar />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, { logout })(Header)