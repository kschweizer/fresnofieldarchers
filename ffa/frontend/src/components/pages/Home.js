import React, { Component } from 'react'

import Blogform from '../blogposts/Blogform';
import Blogposts from '../blogposts/Blogposts';

export class Home extends Component {
    render() {
        return (
            <div>
                <Blogform />
                <Blogposts />
            </div>
        )
    }
}

export default Home
