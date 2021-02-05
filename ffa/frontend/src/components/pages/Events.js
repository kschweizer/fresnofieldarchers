import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Events.scss';
import { FaCamera } from 'react-icons/fa';

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

                <div className="container-lg event-table">
                    <table class="table table-dark table-striped">
                        <tbody>

                            <tr>
                            <td>Safari 2021</td>
                            <td><Link to="/photos"><FaCamera className="icon"/> Safari 2021 Photos </Link></td>
                            </tr>
                            <tr>
                            <td>Safari 2021</td>
                            <td><Link to="/photos"><FaCamera className="icon"/> Safari 2021 Photos </Link></td>
                            </tr>
                            <tr>
                            <td>Safari 2021</td>
                            <td><Link to="/photos"><FaCamera className="icon"/> Safari 2021 Photos </Link></td>
                            </tr>
                            

                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default Events
