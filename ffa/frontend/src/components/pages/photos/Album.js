import React, { useEffect } from 'react';
import { getAlbum } from "../../../actions/photos";
import { SRLWrapper } from "simple-react-lightbox";
import { connect } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import '../Photos.scss';


const options = {
    settings: {
        disableWheelControls: true,
      },
}

// album in this context refers to the album id. props.album refers to a JSON list of photo objects
function Album(props) {

    let location = useLocation()

    useEffect(() => {
        if (props.album_id) {
            props.getAlbum(props.album_id);
        }
    }, [location]); // Only use if albums changes

    return (
        <div className="album container-lg">
            { props.album_id ? (
                <SRLWrapper options={options}>
                    <div className="grid content" data-masonry='{ "itemSelector": ".grid-item" }'>
                        <div className="grid-sizer"></div>
                        {props.album ? (props.album.photos.map(photo => (
                            <div key={photo.id} className="photo grid-item">
                                <a href={photo.image}>
                                    <img className="photo-thumbnail" src={photo.thumbnail} />
                                </a>
                            </div>
                        ))) : (
                            <div key='placeholder' className="photo grid-item">
                                <a href='/static/placeholder.jpg'>
                                    <img src='/static/placeholder.jpg' />
                                </a>
                            </div>
                        )}
                    </div>
                </SRLWrapper>
            ) : (
                null
            )
            }
        </div>
    )
}

const mapStateToProps = state => ({
    album: state.photos.album
});

export default connect(mapStateToProps, { getAlbum })(Album);