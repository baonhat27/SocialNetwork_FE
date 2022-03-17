import styles from "./styles.module.css";
import { useState } from "react";
import { getImage } from "../../../shared/service";

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
      <img className={styles.image} src={getImage(firstImage)} alt="" />
      {showMore && (
        <button className={styles.btn} onClick={onClickShowMore}>
          {`Show ${restImages.length} more`}
        </button>
      )}
      {displayMore &&
        restImages.map((image, index) => (
          <img
            className={styles.image}
            key={index}
            src={getImage(image)}
            alt=""
          />
        ))}
    </div>
  );
}
