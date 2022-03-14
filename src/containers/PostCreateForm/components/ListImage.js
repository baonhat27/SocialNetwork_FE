import styles from "./styles.module.css";

function ListImage({ images, handleDeleteImage }) {
  return (
    <div className={styles["list_img"]}>
      {images.map((image, index) => (
        <div className={styles.img_wrap}>
          <img
            className={styles["upload_img"]}
            key={index}
            src={URL.createObjectURL(image)}
            alt={image.name}
          />
          <span
            className={styles.delete_btn}
            onClick={handleDeleteImage(index)}
          >
            X
          </span>
        </div>
      ))}
    </div>
  );
}

export default ListImage;
