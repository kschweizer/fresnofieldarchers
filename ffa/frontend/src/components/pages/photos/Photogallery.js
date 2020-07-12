import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getPhotos } from "../../../actions/photos";
import Masonry from 'react-masonry-css';

export class Photogallery extends Component {

    static propTypes = {
        photos: PropTypes.array.isRequired
    };

    componentDidMount() {
        this.props.getPhotos();
    }


    render() {
        return (
                <Masonry breakpointCols={3} className="my-masonry-grid" columnClassName="my-masonry-grid_column">
                    {this.props.photos.map(photo => ( 
                        <div key={photo.id}>
                            <img src={photo.image}/> 
                        </div>                     
                    ))}
                </Masonry>
        )
    }
}

const mapStateToProps = state => ({
    photos: state.photos.photos
});

export default connect(mapStateToProps, { getPhotos })(Photogallery);
