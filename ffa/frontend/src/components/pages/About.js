import React, { Component } from 'react';
import './About.scss';
import { FaEnvelope, FaFacebookF, FaPhone, FaExternalLinkAlt } from 'react-icons/fa';

export class About extends Component {
    render() {
        let windowWidth = window.innerWidth;
        if (windowWidth >= 992) {
            var width = "600";
        } else {
            var width = "350";
        }
        return (
            <div className="about-section container-lg">
                <div className="about-header row">
                    <h2>Interested in joining?</h2>
                </div>
                <div className="container-lg member-info">
                    <p>
                        &emsp;&emsp;If you love archery, spending time outdoors with family and friends, or if you're just looking for a place to relax and unwind, then come check out what we have to offer. Please contact us by email or at the number below!
                    </p>
                </div>
                <div className="about-header row">
                    <h2>Club information</h2>
                </div>
                <div className="general-info container-lg">
                    <h1 className="subtitle">
                        Contact Information
                    </h1>
                    <div className="contact">
                        <div className="row">
                            <div className="col-2 contact-icon"><FaPhone/></div>
                            <div className="col-10">(559) 816-7184</div>
                        </div>
                        <div className="row">
                            <div className="col-2 contact-icon"><FaEnvelope/></div>
                            <div className="col-10"><a href="mailto: fresnofieldarchers@gmail.com" target="_blank">fresnofieldarchers@gmail.com  <FaExternalLinkAlt/> </a></div>
                        </div>
                        <div className="row">
                            <div className="col-2 contact-icon"><FaFacebookF/></div>
                            <div className="col-10"><a href="https://www.facebook.com/fresnoarchers" target="_blank">Facebook Page  <FaExternalLinkAlt/> </a></div>
                        </div>
                    </div>
                    
                    <div></div>
                    <h1 className="subtitle">
                        Range Location
                    </h1>
                    <div className="map-container">
                        <iframe width={width} height="450" frameBorder="0" 
                            src="https://www.google.com/maps/embed/v1/place?q=39000%20Dunlap%20Rd%2C%20Dunlap%2C%20CA%2093621&key=AIzaSyC5UDGhop7LmoifIbwHmHQdg2HAXneKu00" 
                            allowFullScreen>
                        </iframe>
                    </div>
                </div>
                <div className="about-header row">
                    <h2>Club History</h2>
                </div>
                <div className="container-lg">
                    <div className="row">
                        <div className="col-sm-7 about-text">
                            <p>
                                <br></br>
                                &emsp;&emsp;The Fresno Field Archers were reorganized from the Fresno Target Archery Club around 1956. The club moved from Pine Lake Lodge, near Roeding Park, to Millerton Lake in that 
                                same year. The first Fresno Safari was held in 1956 at the Millerton range. In 1958 the club began leasing a property in Dunlap with the option to buy. After hosting the first Safari
                                in Dunlap that same year, the members exercised their purchase option and the property was paid off in 5 years; Dunlap became our permanent home. 
                            </p>
                            <p>
                                &emsp;&emsp;The Fresno Safari is one of the nation's longest running outdoor archery tournaments and has attracted some of the world's top shooters. In the early eighties, the Safari drew close to 1000 shooters! 
                                Along with Safari the club also hosts the Gene Foster Traditional Rendezvous.  The Rendezvous draws traditional archers, bow makers, arrow makers, flint knappers and leather 
                                workers from around the state to try their hand at unmarked yardage 3-D targets, pop-ups, balloon shoots and speed rounds.
                            </p>
                            <p>
                                &emsp;&emsp;Boasting a 5 star NFAA rating, you won't find a nicer club-owned property for an archery range around. Located near Dunlap, the range consists of 60 separate target 
                                butts spread across 38 acres. Target distances range from 2 to 101 yds and both field and novelty shoots are held. The range also offers 60 separate broadhead pits and 3-D 
                                targets to hone your shooting skills. Nestled amongst the oaks, at an elevation of 1800 ft., the range offers an escape from the winter fog. In the spring, the hillsides 
                                explode with wildflowers making the short trip up Highway 180 a therapeutic escape from the stresses below. The FFA range has a large clubhouse facility with a fireplace and 
                                heater, a full kitchen, restroom facilities with hot showers, and an indoor shooting block. Plenty of camping space and RV hookups are available for members if they choose to 
                                spend a night or two at the range. Individual club members pay $35 a year and families pay $50 a year in dues which give them full access to all the above amenities.
                            </p>
                        </div>
                        <div className="col-sm-5">
                            <div className="about-photo-container">
                                <img className="about-photo" src="https://fresnofieldarchers.s3-us-west-1.amazonaws.com/images/ffa_history1.png" alt=""/>
                                <p>
                                    Fresno Archers circa 1954
                                </p>                      
                            </div>        
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About
