import React, { Component, useState } from 'react';
import { connect } from 'react-redux';
import { addPhoto, addAlbum } from '../../../actions/photos';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import '../../../components/pages/Photos.scss';

function AlbumForm(props) {
    const [images, setImages] = useState(null);
    const [title, setTitle] = useState("");
    const [description, setDescription ] = useState("");

    /*  IMAGE UPLOAD LOGIC
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
    */

    const onSubmit = e => {
        e.preventDefault();
        const album = { title, description };
        // Individual photo upload continues in componentDidUpdate()
        props.addAlbum(album);
    };
        
    return (
        <div>
            <div className="gallery-header row">
                <h3 className="gallery-title">Create New Photo Album</h3>                
            </div>
            <div className="card">
                <h3>Album Title</h3>
                <div>
                    <InputText type='text' id="album-title" placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <h3>Album Description</h3>
                <div>                    
                    <InputTextarea style={{resize : 'auto'}} value={description} onChange={(e) => setDescription(e.target.value)} rows={5} cols={30} />
                </div>
            </div>
            <button onClick={onSubmit}> SUBMIT </button>
        </div>
    )
}

const mapStateToProps = state => ({
    album: state.photos.album,
});

export default connect(mapStateToProps, {addPhoto, addAlbum})(AlbumForm);