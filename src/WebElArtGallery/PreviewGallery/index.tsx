import React from "react";
import cl from "classnames";
import styles from "./index.module.scss";
import { Photo, CommonClassProps } from "../types";

interface PreviewGalleryProps extends CommonClassProps {
  photos: Photo[];
  activePhotoIndex: number;
}

export const PreviewGallery: React.FC<PreviewGalleryProps> = ({
  photos,
  activePhotoIndex,
  className,
}) => {
  const previewContainer = React.useRef<HTMLUListElement>(null);

  React.useEffect(() => {
    if (!previewContainer.current) {
      return;
    } else {
      previewContainer.current.style.transform = `translate3d(-${
        activePhotoIndex * 164
      }px, 0, 0)`;
    }
  }, [activePhotoIndex]);


  return (
    <div className={cl(styles.previewGallery, className)}>
      <ul className={styles.previewGalleryTrack} ref={previewContainer}>
        {photos.map((photo) => (
          <li key={photo.id} className={styles.previewGalleryPreview}>
            <img
              src={photo.src}
              alt={photo.description}
              className={styles.previewGalleryImage}
            />
          </li>
        ))}
      </ul>
      <div className={styles.previewGalleryCover}>
        {activePhotoIndex + 1} / {photos.length}
      </div>
    </div>
  );
};
