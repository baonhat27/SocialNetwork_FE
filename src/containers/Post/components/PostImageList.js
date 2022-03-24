import styles from "./styles.module.css";
import { useState } from "react";

export default function PostImageList({ images }) {
  const firstImage = images[0];
  const restImages = images.slice(1);
  const [showMore, setShowMore] = useState(() => restImages.length !== 0);
  const [displayMore, setDisplayMore] = useState(false);

  const onClickShowMore = () => {
    setShowMore(false);
    setDisplayMore(true);
  };

  return (
    <div className={styles.list_image}>
      <div className={styles.img_wrap2}>
        <img className={styles.image} src={firstImage} alt="" />
      </div>
      {showMore && (
        <button className={styles.btn_link} onClick={onClickShowMore}>
          {`Show ${restImages.length} more`}
        </button>
      )}
      {displayMore &&
        restImages.map((image, index) => (
          <div className={styles.img_wrap2}>
            <img className={styles.image} key={index} src={image} alt="" />
          </div>
        ))}
    </div>
  );
}
