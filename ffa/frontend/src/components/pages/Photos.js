import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Albumgallery from './photos/Albumgallery';
import SimpleReactLightbox from 'simple-react-lightbox';


export class Photos extends Component {

    render() {
        const guestPage = (
            <div className="container-fluid">
                <Albumgallery/>
            </div>
        );

        return (
            <div>
                <SimpleReactLightbox>
                    { guestPage }
                </SimpleReactLightbox>
            </div>
        )
    }
}

export default Photos;
