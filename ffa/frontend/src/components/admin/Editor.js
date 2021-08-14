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
            <div className="row editor-bar">
                <div className="col editor-link">
                    <Link to="/editor">HOME</Link>
                </div>
                <div className="col editor-link">
                    <Link to="/editor/events">EVENTS</Link>
                </div>
                <div className="col editor-link">
                    <Link to="/editor/photos">PHOTOS</Link>
                </div>
            </div>
            <Switch>
                <Route exact path="/editor" component={Blogposts}/>
                <Route exact path="/editor/events" component={EventForm}/>
                <Route exact path="/editor/photos" component={PhotoEditor}/>
            </Switch>
        </div>
    );
}

export default Editor;

