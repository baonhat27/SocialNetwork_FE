import { useState } from "react";
import styles from "./styles.module.css";

import { FormHeader, ListImage, TextEditor } from "./components";

import { uploadImages, createPost } from "../../shared/service";

function PostCreateForm({ onCreatePost }) {
  const [isEdit, setIsEdit] = useState(false);
  const [text, setText] = useState("");
  const [isUpload, setIsUpload] = useState(false);
  const [images, setImages] = useState([]);
  const [error, setError] = useState("");

  const onClickSubmit = async () => {
    try {
      const imageRes = images.length && (await uploadImages(images));
      const postRes =
        (imageRes || text) &&
        (await createPost(text, imageRes ? imageRes.data : []));

      if (postRes.success) {
        setText("");
        setImages([]);
        setIsEdit(false);
        onCreatePost && onCreatePost(postRes.data);
      }
    } catch (e) {
      setError(e.message);
    }
  };

  const handleDeleteImage = (index) => () => {
    setImages(images.filter((img, idx) => idx !== index));
  };

  return (
    <div
      tabIndex="0"
      className={styles.form}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget))
          setIsEdit(text || images.length || isUpload || false);
      }}
      onClick={(e) => setIsEdit(true)}
    >
      <FormHeader />
      {isEdit ? (
        <>
          <TextEditor text={text} onChangeText={(data) => setText(data)} />
          <ListImage images={images} handleDeleteImage={handleDeleteImage} />
          <div className={styles["input_file"]}>
            <input
              type="file"
              id="postImages"
              name="images"
              accept="image/*"
              multiple
              onFocus={() => {
                setIsUpload(true);
              }}
              onBlur={() => {
                setIsUpload(false);
              }}
              onChange={(e) => setImages(Array.from(e.target.files))}
            />
            <label htmlFor="postImages">Select images</label>
          </div>
          <button className={styles.btn} onClick={onClickSubmit}>
            Submit
          </button>
          {error && <span className={styles.error}>{error}</span>}
        </>
      ) : (
        <span className={styles["text-muted"]}>Write some text</span>
      )}
    </div>
  );
}

export default PostCreateForm;
