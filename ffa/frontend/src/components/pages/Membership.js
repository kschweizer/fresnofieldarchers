import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './Membership.scss';

export class Membership extends Component {
    render() {
        return (
            <div className="container-fluid membership">
                <div className="membership-header row">
                    <div className="title col-sm-4">JOIN THE CLUB!</div>
                </div>
                <div className="container-lg member-info">
                    <p>
                        If you love archery, spending time outdoors with family and friends, or if you're just looking for a place to relax and unwind, then come check out what we have to offer. Please contact us by email or at the number below!
                    </p>
                </div>
            </div>
        )
    }
}

export default Membership
