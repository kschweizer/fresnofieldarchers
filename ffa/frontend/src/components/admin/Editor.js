import React, { useState, useRef, useEffect } from 'react';
import EventForm from './forms/EventForm';
import PhotoEditor from './components/PhotoEditor';
import './Editor.scss';
import Blogposts from './components/Blogposts';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

function Editor() {

    return (
        <div className="editor container-lg">
            <div className="editor-header">
                Site Editor
            </div>
            <nav className="navbar navbar-expand-sm navbar-dark editor-bar">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler2" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarToggler2">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <Link to="/editor" className="nav-link"><h5>HOME</h5></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/editor/events" className="nav-link"><h5>EVENTS</h5></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/editor/photos" className="nav-link"><h5>PHOTOS</h5></Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <Switch>
                <Route exact path="/editor" component={Blogposts}/>
                <Route exact path="/editor/events" component={EventForm}/>
                <Route exact path="/editor/photos" component={PhotoEditor}/>
            </Switch>
        </div>
    );
}

export default Editor;

