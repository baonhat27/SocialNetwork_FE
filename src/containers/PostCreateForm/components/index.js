import { useState } from "react";
import styles from "./styles.module.css";

import FormHeader from "./FormHeader";
import TextEditor from "./TextEditor";

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

  return (
    <div
      tabindex="0"
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
          <input
            type="file"
            id="postImages"
            name="images"
            multiple
            onFocus={() => {
              setIsUpload(true);
            }}
            onBlur={() => {
              setIsUpload(false);
            }}
            onChange={(e) => setImages(e.target.files)}
          />
          <button onClick={onClickSubmit}>Submit</button>
        </>
      ) : (
        <span className={styles["text-muted"]}>Write some text</span>
      )}
    </div>
  );
}

export default PostCreateForm;
export { PostCreateForm };
