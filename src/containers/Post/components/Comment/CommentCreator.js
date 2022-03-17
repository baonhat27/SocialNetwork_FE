import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import styles from "./styles.module.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

function CommentCreator(props) {
  const user = useSelector((state) => state.user);
  const [text, setText] = useState("");
  const [isUpload, setIsUpload] = useState(false);
  const [images, setImages] = useState([]);
  const onClickSubmit = async () => {};
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
        
      </div>
      <div className={styles.editor}>
        <CKEditor
          editor={ClassicEditor}
          data={text}
          config={config}
          onReady={(editor) => {
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            setText(data);
          }}
          onFocus={(event, editor) => {
          }}
          onClick={(event, editor) => {
          }}
        />
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
          Bình luận
        </button>
      </div>
    </div>
  );
}

export default CommentCreator;
