import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import styles from "./styles.module.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { createComment } from "../../../../shared/service";

function CommentCreator({ onCreateComment, postId }) {
  const user = useSelector((state) => state.user);
  const socket = useSelector((state) => state.io )
  const [text, setText] = useState("");
  const onClickSubmit = async () => {
    const response = await createComment(text, postId);
    if (response.success) {
      setText("");
      onCreateComment && onCreateComment(response.data);
    }
    else{
      console.log("Cannot Create Comment");
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
          style={{ marginLeft: 25 }}
          size={50}
          icon={<UserOutlined />}
        />
      </div>
      <div className={styles.editor}>
        <CKEditor
          editor={ClassicEditor}
          data={text}
          config={config}
          onReady={(editor) => {}}
          onChange={(event, editor) => {
            const data = editor.getData();
            setText(data);
          }}
        />
  
      </div>
      <div className={styles.btn_group}>
        {/* <div className={styles["input_file"]}>
          <input
            type="file"
            id="postImages"
            name="images"
            accept="image/*"
            multiple
            // onChange={(e) => setImages(Array.from(e.target.files))}
          />
          <label htmlFor="postImages" className={styles.btn}>
            Select images
          </label>
        </div> */}
        <button className={styles.btn} onClick={onClickSubmit}>
          B??nh lu???n
        </button>
      </div>
    </div>
  );
}

export default CommentCreator;
