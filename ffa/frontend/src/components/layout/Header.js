import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Navbar } from './Navbar';
import { Link } from 'react-router-dom';
import { logout } from '../../actions/auth';
import { FaEnvelope, FaFacebookF, FaUser } from 'react-icons/fa';
import { IconContext } from 'react-icons';

export class Header extends Component {
    static propTypes = {
        auth: PropTypes.object.isRequired,
        logout: PropTypes.func.isRequired
    }

    render() {
        const { isAuthenticated, user } = this.props.auth;
        const authLinks = (
            <div className="container-fluid">
                <div className="row media-bar">
                    <Link to="/account" className="user-link">
                        <h5>Profile</h5>
                    </Link>
                    <div className="editor-link">
                        <Link to="/editor"><i className="pi pi-user-edit" style={{ marginLeft : '10px', marginTop : '10px', fontSize : '1.2em' }}></i></Link>
                    </div>
                    <ul className="social-icons">
                        <IconContext.Provider value={{ style: { verticalAlign: 'middle', width: '50%', height: '50%', marginBottom: '2px' }}}>
                        <li>
                            <a className="facebook" href="https://www.facebook.com/fresnoarchers/" target="_blank">
                                <FaFacebookF />
                            </a>
                        </li>
                        <li>
                            <a className="email" href="mailto: fresnofieldarchers@gmail.com" target="_blank">
                                <FaEnvelope />
                            </a>                        
                        </li>
                        </IconContext.Provider> 
                    </ul>                     
                </div>
            </div>
        );

        const guestLinks = (
            <div className="container-fluid">
                <div className="row media-bar">
                    <Link to="/login" className="user-link">
                        <h5>Log in</h5>
                    </Link>
                    <ul className="social-icons">
                        <IconContext.Provider value={{ style: { verticalAlign: 'middle', width: '70%', height: '70%', marginBottom: '2px' }}}>
                        <li>
                            <a className="facebook" href="https://www.facebook.com/fresnoarchers/" target="_blank">
                                <FaFacebookF />
                            </a>
                        </li>
                        <li>
                            <a className="email" href="mailto: fresnofieldarchers@gmail.com" target="_blank">
                                <FaEnvelope />
                            </a>                        
                        </li>
                        </IconContext.Provider>                         
                    </ul> 
                </div>
            </div>
        );

        return (
            <div className="header">
                { isAuthenticated? authLinks : guestLinks }
                <div className="logo-container container-fluid">
                    <div className="row justify-content-center">
                        <Link to="/" className="logo-link">
                            <img src="https://fresnofieldarchers.s3-us-west-1.amazonaws.com/images/ffalogo.svg" className="logo" alt=""/> 
                        </Link>
                    </div>  
                </div>
                <Navbar />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, { logout })(Header);