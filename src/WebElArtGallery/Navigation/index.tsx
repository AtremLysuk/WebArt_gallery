import cl from "classnames";
import styles from "./index.module.scss";
import { CommonClassProps } from "../types";

interface NavigationProps extends CommonClassProps {
  disabledPrev: boolean;
  disabledNext: boolean;
  onNextClick: () => void;
  onPrevClick: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  disabledPrev,
  disabledNext,
  onNextClick,
  onPrevClick,
  className,
}) => {
  return (
    <div className={cl(styles.navigation, className)}>
      <button
        disabled={disabledPrev}
        className={cl(styles.navigation, styles.navigationBtnLeft)}
        onClick={onPrevClick}
      >
        Show previous photo
      </button>
      <button
        disabled={disabledNext}
        className={cl(styles.navigation, styles.navigationBtnRigth)}
        onClick={onNextClick}
      >
        Show Next photo
      </button>
    </div>
  );
};
