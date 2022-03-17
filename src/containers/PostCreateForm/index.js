import { useState } from "react";
import styles from "./styles.module.css";

import { FormHeader, ListImage, TextEditor } from "./components";
import withUploadImage from "../UploadImage";

import { createPost } from "../../shared/service";

function PostCreateForm({ onCreatePost, images, uploading, upload }) {
  const [isEdit, setIsEdit] = useState(false);
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  const onClickSubmit = async () => {
    try {
      const postRes = await createPost(text, images);
      if (postRes.success) {
        setText("");
        setIsEdit(false);
        onCreatePost && onCreatePost(postRes.data);
      }
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <div
      tabIndex="0"
      className={styles.form}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget))
          setIsEdit(text || images.length || uploading || false);
      }}
      onClick={(e) => setIsEdit(true)}
    >
      <FormHeader />
      {isEdit ? (
        <>
          <TextEditor text={text} onChangeText={(data) => setText(data)} />
          <ListImage images={images} />
          <button className={styles.btn} onClick={upload}>
            Upload images
          </button>
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

export default withUploadImage(PostCreateForm);
