import React, { Component } from 'react';
import { FaEnvelope } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { IconContext } from 'react-icons';

export class Footer extends Component {
    render() {
        return (
            <div className="site-footer">
              <div className="container">
                <div className="row">
                  <div className="col-sm-12 col-md-9">
                    <h6>Contact</h6>
                    <ul className="footer-links">
                        <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
                        <li><h4><FaEnvelope /> <a href="mailto: fresnofieldarchers@gmail.com">fresnofieldarchers@gmail.com</a></h4></li>
                        <li><h4>38548 Dunlap Rd, Dunlap, CA 93621</h4></li>
                        </IconContext.Provider>
                    </ul>
                  </div>

                  <div className="col-xs-6 col-md-3">
                    <h6>Quick Links</h6>
                    <ul className="footer-links">
                      <li><a href="/about-us">About Us</a></li>
                    </ul>
                  </div>
                </div>
                <hr />
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-sm-12 col-md-9">
                    <ul className="social-icons">
                      <IconContext.Provider value={{ style: { verticalAlign: 'middle', width: '70%', height: '70%', marginBottom: '2px' }}}>
                        <li>
                            <a className="facebook" href="https://www.facebook.com/fresnoarchers/" rel="noreferrer" target="_blank">
                              <FaFacebook />
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
                  <div className="col-sm-12 col-md-3">
                    <a href="/login">Admin Login</a>
                  </div>
                </div>
              </div>
        </div>
        )
    };
};

export default Footer;
