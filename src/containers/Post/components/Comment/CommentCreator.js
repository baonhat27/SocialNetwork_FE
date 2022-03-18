import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import styles from "./styles.module.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { createComment } from "../../../../shared/service";

<<<<<<< HEAD
function CommentCreator({ onCreateComment, postId }) {
  const user = useSelector((state) => state.user);
  const [text, setText] = useState("");
  const onClickSubmit = async () => {
    const response = await createComment(text, postId);
    if (response.success) {
      setText("");
      onCreateComment && onCreateComment(response.data);
=======
function CommentCreator({onCreateComment, postId}) {
  // console.log(postId);
  const user = useSelector((state) => state.user);
  const [text, setText] = useState("");
  const [isUpload, setIsUpload] = useState(false);
  const [images, setImages] = useState([]);
  const onClickSubmit = async () => {
    const response = await createComment(text, postId)
    if(response.success){
      // console.log(response.data);
      setText("")
      onCreateComment && onCreateComment(response.data)
>>>>>>> dce44190bf1f6e3c3a21b8e9ff65cb7a7d42da7a
    }
  };
  const config = {
    toolbar: [
      "heading",
      "|",
      "bold",
      "italic",
      "link",
      "|",
      "numberedList",
      "bulletedList",
    ],
  };
  return (
    <div className={styles.comment_box}>
      <div className={styles.c_info}>
        <Avatar
          src={user.avatar}
          style={{ border: "1px solid #1c85c4", marginLeft: 25 }}
          size={50}
          icon={<UserOutlined />}
        />
<<<<<<< HEAD
=======
        
>>>>>>> dce44190bf1f6e3c3a21b8e9ff65cb7a7d42da7a
      </div>
      <div className={styles.editor}>
        <CKEditor
          editor={ClassicEditor}
          data={text}
          config={config}
<<<<<<< HEAD
          onReady={(editor) => {}}
=======
          onReady={(editor) => {
          }}
>>>>>>> dce44190bf1f6e3c3a21b8e9ff65cb7a7d42da7a
          onChange={(event, editor) => {
            const data = editor.getData();
            setText(data);
          }}
        />
<<<<<<< HEAD
      </div>
      <div className={styles.btn_group}>
=======
>>>>>>> dce44190bf1f6e3c3a21b8e9ff65cb7a7d42da7a
        <div className={styles["input_file"]}>
          <input
            type="file"
            id="postImages"
            name="images"
            accept="image/*"
            multiple
<<<<<<< HEAD
            // onChange={(e) => setImages(Array.from(e.target.files))}
          />
          <label htmlFor="postImages" className={styles.btn}>
            Select images
          </label>
=======
            onFocus={() => {
              setIsUpload(true);
            }}
            onBlur={() => {
              setIsUpload(false);
            }}
            onChange={(e) => setImages(Array.from(e.target.files))}
          />
          <label htmlFor="postImages">Select images</label>
>>>>>>> dce44190bf1f6e3c3a21b8e9ff65cb7a7d42da7a
        </div>
        <button className={styles.btn} onClick={onClickSubmit}>
          Bình luận
        </button>
      </div>
    </div>
  );
}

export default CommentCreator;
