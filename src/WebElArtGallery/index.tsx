

import React from "react";

import { MainPhoto } from "./MainPhoto";
import { PreviewGallery } from "./PreviewGallery";
import { Navigation } from "./Navigation";

import { Photo } from "./types";

import styles from './index.module.scss';

interface WebElArtGalleryProps {
    photos: Photo[];
}


export const WebElArtGallery: React.FC<WebElArtGalleryProps> = ({   
    photos, 
}) => {

    const [ indexActivePhoto, setIndexActivePhoto ] = React.useState(0);

    if(!photos.length) {
        return null;
    }


    const activePhoto = photos[indexActivePhoto];
    const prevPhoto = photos[indexActivePhoto - 1];
    const nextPhoto = photos[indexActivePhoto + 1];
    
    

    return(
        <div className={styles.webelartGallery}>
            <div className={styles.webelartGalleryContainer}>
                <MainPhoto
                prevPhoto={prevPhoto}
                activePhoto={activePhoto}
                nextPhoto={nextPhoto}
                />
                <Navigation
                className={styles.webelartGalleryNavigation}
                disabledPrev={!prevPhoto}
                disabledNext={!nextPhoto}
                onPrevClick={() => {
                    setIndexActivePhoto(indexActivePhoto - 1);
                }}
                onNextClick={() => {
                    setIndexActivePhoto(indexActivePhoto + 1);
                }}
                />
            </div>
            <PreviewGallery
                activePhotoIndex={indexActivePhoto}
                photos={photos}
                className={styles.webelartGalleryPreviewList}
            />
        </div>
    )
}