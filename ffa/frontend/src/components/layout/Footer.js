import React, { Component } from 'react';
import { FaEnvelope, FaFacebook } from 'react-icons/fa';
import { IconContext } from 'react-icons';

export class Footer extends Component {
    render() {
        return (
            <div className="site-footer">
              <div className="container">
                <div className="row">
                  <div className="col-sm-12 col-md-6">
                    <h6>Contact</h6>
                    <ul className="footer-links">
                        <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
                        <li><h4><FaEnvelope /> <a href="mailto: fresnofieldarchers@gmail.com">fresnofieldarchers@gmail.com</a></h4></li>
                        <li><h4>38548 Dunlap Rd, Dunlap, CA 93621</h4></li>
                        </IconContext.Provider>
                    </ul>
                  </div>
        
                  <div className="col-xs-6 col-md-3">
                    
                  </div>
        
                  <div className="col-xs-6 col-md-3">
                    <h6>Quick Links</h6>
                    <ul className="footer-links">
                      <li><a href="/about-us">About Us</a></li>
                      <li><a href="/membership">Membership</a></li>
                    </ul>
                  </div>
                </div>
                <hr />
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-md-8 col-sm-6 col-xs-12">
                    <ul className="social-icons">
                      <IconContext.Provider value={{ style: { verticalAlign: 'middle', width: '80%', height: '80%', marginBottom: '2px' }}}>
                        <li>
                            <a className="facebook" href="https://www.facebook.com/fresnoarchers/" target="_blank">
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
                  <div className="col-md-4 col-sm-6 col-xs-12">
                    <span></span>
                  </div>
                </div>
              </div>
        </div>
        )
    };
};

export default Footer;
