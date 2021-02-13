import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addPhoto, addAlbum } from '../../../actions/photos';
import '../Photos.scss';

export class Photoform extends Component {
    state = {
        images: null,
        title: "",
        description: "",
        submitting: false,
    };

    static propTypes = {
        addPhoto: PropTypes.func.isRequired,
        addAlbum: PropTypes.func.isRequired,
    };

    componentDidUpdate() {
        if (this.state.submitting && this.props.album) {
            const { images, title, description } = this.state;
            const num_images = images.length;
            for (let i = 0; i < num_images; i++) {
                let data = new FormData();
                data.append(`image`, images[i]);
                data.append(`album`, this.props.album.id);
                this.props.addPhoto(data, i+1, num_images);
            }
            this.setState( {submitting: false} );
        }
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    uploadFile = e => this.setState({ [e.target.name]: e.target.files });

    onSubmit = e => {
        e.preventDefault();
        const { images, title, description } = this.state;
        const num_images = images.length;
        const album = { title, description };
        this.setState( {submitting: true } );
        // Individual photo upload continues in componentDidUpdate()
        this.props.addAlbum(album);
    };


    render() {
        const { images, title, description } = this.state;
        return (
            <div className="photo-form">
                <label>
                    Upload images
                    <input type='file' name='images' multiple onChange={this.uploadFile} />
                </label>
                <label>
                    Title 
                    <input type='text' name='title' value={title} onChange={this.onChange} />
                </label>
                <label>
                    Description 
                    <input type='text' name='description' value={description} onChange={this.onChange} />
                </label>

                <button onClick={this.onSubmit}> SUBMIT </button>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    album: state.photos.album,
});

export default connect(mapStateToProps, {addPhoto, addAlbum})(Photoform);
