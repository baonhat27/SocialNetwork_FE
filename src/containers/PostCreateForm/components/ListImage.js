import styles from "./styles.module.css";

function ListImage({ images }) {
  return (
    <div className={styles["list_img"]}>
      {images.map((image, index) => (
        <div key={index} className={styles.img_wrap}>
          <img
            className={styles["upload_img"]}
            key={index}
            src={image}
            alt={image.name}
          />
        </div>
      ))}
    </div>
  );
}

export default ListImage;
