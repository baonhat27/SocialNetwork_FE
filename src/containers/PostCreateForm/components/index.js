import { useState } from "react";
import styles from "./styles.module.css";

import FormHeader from "./FormHeader";
import TextEditor from "./TextEditor";
import ListImage from "./ListImage";

import { uploadImages, createPost } from "../services";

function PostCreateForm() {
  const [isEdit, setIsEdit] = useState(false);
  const [text, setText] = useState("");
  const [isUpload, setIsUpload] = useState(false);
  const [images, setImages] = useState([]);

  const onClickSubmit = async () => {
    const imageRes = images.length ? await uploadImages(images) : [];
    const postRes = createPost(text, imageRes.data);
    console.log(postRes);
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
            <label for="postImages">Select images</label>
          </div>
          <button className={styles.btn} onClick={onClickSubmit}>
            Submit
          </button>
        </>
      ) : (
        <span className={styles["text-muted"]}>Write some text</span>
      )}
    </div>
  );
}

export { PostCreateForm };
