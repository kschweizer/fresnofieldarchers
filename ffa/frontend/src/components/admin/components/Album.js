import React, { useEffect, useRef, useState } from 'react';
import { getAlbum, addPhoto, deletePhoto } from "../../../actions/photos";
import { SRLWrapper } from "simple-react-lightbox";
import { connect } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { FileUpload } from 'primereact/fileupload';
import { ProgressBar } from 'primereact/progressbar';
import '../../pages/Photos.scss';


const options = {
    settings: {
        disableWheelControls: true,
      },
}



// album in this context refers to the album id. props.album refers to a JSON list of photo objects
function Album(props) {

    const [visible, setVisible] = useState(false);
    const [selection, setSelection] = useState(new Set());
    const [loading, setLoading] = useState(true);
    const toast = useRef(null);
    const fileUpload = useRef(null);
    let location = useLocation();

    useEffect(() => {
        if (props.album_id) {
            props.getAlbum(props.album_id);
            setLoading(false);
            setSelection(new Set());
        }
    }, [location, props.refresh]); // Only use if albums changes

    const accept = () => {
        toast.current.show({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
        setVisible(false);
        for (let img of selection) {
            props.deletePhoto(img);
        }
        setSelection(new Set());};

    const reject = () => {
        toast.current.show({ severity: 'info', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
        setVisible(false);
    };

    const customUpload = (e) => {
        let images = e.files;
        for (let i = 0; i < images.length; i++) {
            let data = new FormData();
            data.append(`image`, images[i]);
            data.append(`album`, props.album_id);
            props.addPhoto(data);
        }
        fileUpload.current.clear();
    }

    const toggleSelection = (image) => {
        let newSelection = new Set(selection);
        if (newSelection.has(image)) {
            newSelection.delete(image);
        }
        else {
            newSelection.add(image);
        }
        setSelection(newSelection);
    }

    return (
        props.album_id ? (
            loading ? (
                <h1>LOADING...</h1>
            ) : (
                <div className="album container-lg">
                    <Toast ref={toast}></Toast>
                    <div className="upload-box">
                        { props.album ? 
                        <div>
                            <h3>Add photos to album: {props.album.title}</h3> 
                            <FileUpload ref={fileUpload} name="photoUpload" url="./upload" customUpload uploadHandler={customUpload} multiple accept="image/*" maxFileSize={5000000}
                                emptyTemplate={<p className="p-m-0">Drag and drop files to here to upload.</p>} />
                        </div>
                        : 
                        null }
                    </div>
                    
                    {(selection.size > 0) ? (
                        <div>
                            <h3>{selection.size} photos selected</h3> 
                            <ConfirmDialog visible={visible} onHide={() => setVisible(false)} message="Are you sure you want to proceed?"
                            header="Confirmation" icon="pi pi-exclamation-triangle" accept={accept} reject={reject} />
                            <Button onClick={() => setVisible(true)} icon="pi pi-times" label="Delete" /> 
                        </div>
                        ) : 
                        (props.album && props.album.photos.length > 0) ? <h3>Select photos below to edit:</h3> : null
                    }
                    
                    <SRLWrapper options={options}>
                        <div className="grid content" data-masonry='{ "itemSelector": ".grid-item" }'>
                            <div className="grid-sizer"></div>
                            {props.album ? (props.album.photos.map(photo => (
                                <div key={photo.id} className="photo grid-item">
                                    <a href={photo.image}>
                                        <img src={photo.thumbnail} />
                                    </a>
                                    <Button className={selection.has(photo.id) ? "p-button-danger" : "p-button-success"} style={{position : 'absolute', left : '0px', zIndex : '10'}} onClick={toggleSelection.bind(this, photo.id)} icon={selection.has(photo.id) ? "pi pi-minus" : "pi pi-plus"}/>
                                </div>
                            ))) : (
                                null
                            )}
                        </div>
                    </SRLWrapper>
                </div>
            )
        ) : (
            null
        )
    );
}

const mapStateToProps = state => ({
    album: state.photos.album,
    refresh: state.photos.refresh
});

export default connect(mapStateToProps, { getAlbum, addPhoto, deletePhoto })(Album);