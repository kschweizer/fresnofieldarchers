import React from 'react';
import GalleryControls from './GalleryControls';
import AlbumForm from '../forms/AlbumForm';

export default function PhotoEditor() {
    return (
        <div className="container-lg">
            <AlbumForm/>
            <GalleryControls/>
        </div>
    )
}
