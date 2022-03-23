import { useEffect, useState } from "react";
import TextEditor from "../../../components/TextEditor";
import withUploadImage from "../../UploadImage";
import styles from "./styles.module.css";
import PostImageList from "./PostImageList";
import { updatePost } from "../../../shared/service";

function PostEdit({
  postId,
  postText,
  postImages,
  cancel,
  images,
  submit,
  upload,
}) {
  const [text, setText] = useState(postText);

  const [listImages, setListImages] = useState(postImages);

  useEffect(() => {
    setListImages([...listImages, ...images]);
  }, [images]);

  const handleDelete = (index) => {
    setListImages(listImages.filter((img, idx) => idx !== index));
  };

  const handleSubmit = async () => {
    const res = await updatePost(postId, text, listImages);
    res.success && (submit(text, listImages) || cancel());
  };

  return (
    <div className={styles.edit_box}>
      <TextEditor text={text} onChangeText={(text) => setText(text)} />
      <button className={`${styles.btn}`} onClick={upload}>
        Upload images
      </button>

      <div className={styles.list_img}>
        {listImages.map((img, index) => (
          <div className={styles.img_wrap}>
            <img
              className={styles.image}
              key={index}
              src={img}
              alt=""
              onClick={() => handleDelete(index)}
            />
          </div>
        ))}
      </div>

      <div className={styles.btn_group}>
        <button className={`${styles.btn}`} onClick={handleSubmit}>
          Submit
        </button>

        <button className={`${styles.btn} ${styles.danger}`} onClick={cancel}>
          Cancel
        </button>
      </div>
    </div>
  );
}

export default withUploadImage(PostEdit);
