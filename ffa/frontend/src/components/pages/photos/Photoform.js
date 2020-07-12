import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addPhoto } from '../../../actions/photos';

export class Photoform extends Component {
    state = {
        images: null,
        title: "",
        description: ""
    };

    static propTypes = {
        addPhoto: PropTypes.func.isRequired
    };

    uploadFile(e) {
        
    }
    onChange = e => this.setState({ [e.target.name]: e.target.value });

    uploadFile = e => this.setState({ [e.target.name]: e.target.files });

    onSubmit = e => {
        e.preventDefault();
        const { images, title, description } = this.state;
        let data = new FormData();
        for (let i = 0; i < images.length; i++) {
            data.append(`image${i}`, images[i], images[i].fileName);
            data.append(`title${i}`, title);
            data.append(`description${i}`, description);
        }
        data.append('count', images.length);
        this.props.addPhoto(data);
    };


    render() {
        const { imagess, title, description } = this.state;
        return (
            <div className="photo-form">
                <label>
                    Upload images
                    <input type='file' name='images' multiple name="images" onChange={this.uploadFile} />
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

export default connect(null, {addPhoto})(Photoform);
