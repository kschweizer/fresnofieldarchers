import React, { Component } from 'react'

import Blogform from '../blogposts/Blogform';
import Blogposts from '../blogposts/Blogposts';
import Banner from '../layout/Banner';

export class Home extends Component {
    render() {
        return (
            <div>
                <Banner />
                <Blogform />
                <Blogposts />
            </div>
        )
    }
}

export default Home
