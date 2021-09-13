import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, useLocation, useHistory } from 'react-router-dom';
import Album from './Album';
import { getAlbums, getAlbum } from "../../../actions/photos";
import '../Photos.scss';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function Albumgallery(props) {

    let location = useLocation();

    let query = useQuery();

    useEffect(() => {
        props.getAlbums();
    }, [location]); // Only use if albums changes

    return (
        <div className="container-lg">
            <div className="gallery-header row">
                <div className="gallery-title">
                    Photo Albums
                </div> 
            </div>
            <div className="albums container-lg">
                
                {query.get("album") ? (
                    <Link to="/photos">
                        <button className="btn btn-success">Go back to Album List</button>
                    </Link>
                    ) : (
                        <table className="table">
                        <tbody>
                        {props.albums ? (
                            props.albums.map(album => ( 
                                <tr key={album.id} className="photo col-lg-3 col-md-4 col-6">
                                    <td>
                                        <Link to={`/photos?album=${album.id}`} >
                                            <div className="album-thumbnail">
                                                <h4> {album.title} </h4>
                                            </div>
                                        </Link>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            null
                        )
                        }
                        </tbody>
                        </table>
                )}
                
                <Album album_id={query.get("album")}/>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    albums: state.photos.albums
});

export default connect(mapStateToProps, { getAlbums, getAlbum })(Albumgallery);