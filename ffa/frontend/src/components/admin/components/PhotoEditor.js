import React from 'react';
import SimpleReactLightbox from 'simple-react-lightbox';
import GalleryControls from './GalleryControls';

export default function PhotoEditor() {
    return (
        <div className="container-lg">
            <SimpleReactLightbox>
                <GalleryControls/>
            </SimpleReactLightbox>
        </div>
    )
}
