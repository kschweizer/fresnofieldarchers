import React, { Component } from 'react';
import  Photogallery from './photos/Photogallery';
import  Photoform  from './photos/Photoform';


export class Photos extends Component {
    render() {
        return (
            <div>
                <Photoform />
                <Photogallery />
            </div>
        )
    }
}

export default Photos
