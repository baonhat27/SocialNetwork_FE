import styles from "./styles.module.css";

import { getImage } from "../services";

export default function PostImageList({ images }) {
  return (
    <div className={styles.list_image}>
      {images.map((image, index) => (
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
