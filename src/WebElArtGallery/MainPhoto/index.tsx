import cl from "classnames";
import { Photo, CommonClassProps } from "../types";

import styles from "./index.module.scss";

interface MainPhotoProps extends CommonClassProps {
  prevPhoto?: Photo;
  activePhoto: Photo;
  nextPhoto?: Photo;
}

export const MainPhoto: React.FC<MainPhotoProps> = ({
  prevPhoto,
  activePhoto,
  nextPhoto,
  className,
}) => {
  return (
    <div className={cl(className, styles.mainPhoto)}>
      {prevPhoto && (
        <img
          src={prevPhoto.src}
          alt={prevPhoto.description}
          className={styles.mainPhotoImagePrev}
        />
      )}

      <img
        src={activePhoto.src}
        alt={activePhoto.description}
        className={styles.mainPhotoImage}
      />

      {nextPhoto && (
        <img
          src={nextPhoto.src}
          alt={nextPhoto.description}
          className={styles.mainPhotoImageNext}
        />
      )}
    </div>
  );
};
