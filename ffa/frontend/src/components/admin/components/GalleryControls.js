import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import Album  from './Album';
import AlbumForm from '../forms/AlbumForm';
import { getAlbums, getAlbum, deleteAlbum } from "../../../actions/photos";
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import '../../pages/Photos.scss';
function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function GalleryControls(props) {
    const [visible, setVisible] = useState(false);
    const [selection, setSelection] = useState(null);
    const toast = useRef(null);
    let query = useQuery();
    
    const accept = (album) => {
        props.deleteAlbum(album).then(() => (props.getAlbums()));
        toast.current.show({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
    };

    const reject = () => {
        toast.current.show({ severity: 'info', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
    };

    const confirmDelete = () => {
        confirmDialog({
            message: 'Do you want to delete this record?',
            header: 'Delete Confirmation',
            icon: 'pi pi-info-circle',
            acceptClassName: 'p-button-danger',
            accept,
            reject
        });
    };

    useEffect(() => {
        props.getAlbums();
    }, []); // Only use if albums changes

    return (
        <div>
            <Toast ref={toast} />
            {query.get("album") ? null : <AlbumForm />}
            <div className="gallery-header row">
                <h3 className="gallery-title">
                    Edit An Existing Album
                </h3> 
            </div>
            <div className="albums container-lg">
                
                {query.get("album") ? (
                    <Link to="/editor/photos">
                        <button className="btn btn-primary">Back to Album List</button>
                    </Link>
                    ) : (
                        <table className="table">
                        <tbody>
                        {props.albums ? (
                            props.albums.map(album => ( 
                                <tr key={album.id} className="photo col-lg-3 col-md-4 col-6">
                                    <td>
                                        <Link to={`/editor/photos?album=${album.id}`} >
                                            <div className="album-thumbnail">
                                                <h4> {album.title} </h4>
                                            </div>
                                        </Link>
                                    </td>
                                    <td>
                                        <ConfirmDialog key={`${album.id}`} visible={visible && selection == album.id} onHide={() => {setSelection(null); setVisible(false);}} message="Are you sure you want to proceed?"
                                            header="Confirmation" icon="pi pi-exclamation-triangle" accept={accept.bind(this, album.id)} reject={reject} />
                                        <Button onClick={() => {setSelection(album.id); setVisible(true);}} icon="pi pi-times" label="Delete" />
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
    albums: state.photos.albums,
    refresh: state.photos.refresh
});

export default connect(mapStateToProps, { getAlbums, getAlbum, deleteAlbum })(GalleryControls);