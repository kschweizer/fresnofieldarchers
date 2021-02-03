import React, { Component } from 'react';
import './Events.scss';

export class Events extends Component {
    render() {
        return (

            <div className="container-fluid events">
                <div className="event-header row">
                    <div className="title col-sm-4">EVENTS</div>
                </div>
                <div className="event-banner">
                    <div className="row safari-event">
                        <img className="safari-logo" src="/static/elephant_copy.jpg"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Events
