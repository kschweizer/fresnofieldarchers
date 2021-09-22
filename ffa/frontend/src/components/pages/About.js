import React, { Component, useEffect, useState } from 'react';
import './About.scss';
import { FaEnvelope, FaFacebookF, FaPhone, FaExternalLinkAlt } from 'react-icons/fa';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';

export default function About() {
    const [width, setWidth] = useState(window.innerWidth);
    const [mapWidth, setMapWidth] = useState((window.innerWidth >= 992) ? ('600') : ('350'));
    const [number, setNumber] = useState(null);
    const [pitch, setPitch] = useState(null);
    const [info, setInfo] = useState(null);
    const [history, setHistory] = useState(null);

    useEffect(() => {
        axios.get('/api/webapp/about/1/').then(res => {
            let data = res.data;
            setNumber(data.number);
            setPitch(data.pitch);
            setInfo(data.info);
            setHistory(data.history);
        })
    }, [])

    const handleResize = () => {
        setWidth(window.innerWidth);
        if (width >= 992) {
            setMapWidth('600');
        } else {
            setMapWidth('350');
        }
    }
    window.addEventListener('resize', handleResize);
    
    return (
        <div className="about-section container-lg">
            <div className="about-header">
                <h2>Interested in joining?</h2>
            </div>
            <div className="container-lg member-info">
                {pitch ? (<ReactQuill className="custom-quill-public" value={pitch} readOnly={true} preserveWhitespace={true} modules={{ toolbar : false }} />) : null}
            </div>
            <div className="about-header">
                <h2>Club information</h2>
            </div>
            <div className="general-info container-lg">
                { info ? (<ReactQuill className="custom-quill-public" value={info} readOnly={true} preserveWhitespace={true} modules={{ toolbar : false }} />) : null }
                <h1 className="subtitle">
                    Contact Information
                </h1>
                <div className="contact">
                    <div className="row">
                        <div className="col-1 contact-icon"><FaPhone/></div>
                        <div className="col-11">{number ? (number) : null}</div>
                    </div>
                    <div className="row">
                        <div className="col-1 contact-icon"><FaEnvelope/></div>
                        <div className="col-11"><a href="mailto: fresnofieldarchers@gmail.com" target="_blank">fresnofieldarchers@gmail.com  <FaExternalLinkAlt/> </a></div>
                    </div>
                    <div className="row">
                        <div className="col-1 contact-icon"><FaFacebookF/></div>
                        <div className="col-11"><a href="https://www.facebook.com/fresnoarchers" target="_blank">Facebook Page  <FaExternalLinkAlt/> </a></div>
                    </div>
                </div>
                
                <div></div>
                <h1 className="subtitle">
                    Range Location
                </h1>
                <div className="map-container">
                    { mapWidth ? (
                        <iframe width={mapWidth} height="450" frameBorder="0" 
                            src="https://www.google.com/maps/embed/v1/place?q=39000%20Dunlap%20Rd%2C%20Dunlap%2C%20CA%2093621&key=AIzaSyC5UDGhop7LmoifIbwHmHQdg2HAXneKu00" 
                            allowFullScreen>
                        </iframe>
                    ) : null}
                </div>
            </div>
            <div className="about-header">
                <h2>Club History</h2>
            </div>
            <div className="container-lg">
                <div className="row">
                    <div className="col-sm-7 about-text">
                        { history ? (<ReactQuill className="custom-quill-public" value={history} readOnly={true} preserveWhitespace={true} modules={{ toolbar : false }} />) : null }
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
    );
}
