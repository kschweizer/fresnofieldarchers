import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Membership extends Component {
    render() {
        return (
            <div className="container-lg membership">
                <p>
                    If you love archery and enjoy spending time in the outdoors with family and friends, or if you're just looking for a place to relax and unwind, then come check out what we have to offer. Please contact us at the number below, or email us at fresnofieldarchers@gmail.com 
                    Please call to set up a visit, you won't be disappointed!
                </p>

                <Link to='/members/work'>Click here to view current Range tasks</Link>
            </div>
        )
    }
}

export default Membership
