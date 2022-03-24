import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import React, { useState } from "react";
import styles from "./styles.module.css";
import { Avatar } from "antd";
import { editComment } from "../../../../shared/service";

function Comment({ comment, onDeleteComment }) {
  const [checkEditButton, setCheckEditButton] = useState(false);
  const [optionOn, setOptionOn] = useState(false);
  const [text, setText] = useState("");
  const user = comment.createdBy;
  const localUserId = localStorage.getItem("userId")
  
  const handleOption = () => {
    setOptionOn(!optionOn);
  };
  const onSubmitEdit = async () => {
    const response = await editComment(text, comment._id);
    if (response.success) {
      if (text != "") {
        comment.content = response.data.content;
      } else {
        comment.content = comment.content;
      }
      setText("");
      setCheckEditButton(false);
    }
  };

  const handleEditor = () => {
    setCheckEditButton(!checkEditButton);
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
    <div className={styles.comment_box1} key={comment._id}>
      <div className={styles.info}>
        <Avatar
          src={user.avatar}
          style={{ border: "1px solid #1c85c4" }}
          size={40}
        />
      </div>
      <div
        className={
          checkEditButton
            ? styles.comment_editor + " " + styles.display
            : styles.comment_editor + " " + styles.hide
        }
      >
        <CKEditor
          editor={ClassicEditor}
          data={comment.content}
          config={config}
          onReady={(editor) => {}}
          onChange={(event, editor) => {
            const data = editor.getData();
            setText(data);
          }}
        />
        <div className={styles.btn_group}>
          <button className={styles.btn} onClick={onSubmitEdit}>
            Xác nhận
          </button>
          <button className={styles.btn} onClick={() => handleEditor()}>
            Huỷ
          </button>
        </div>
      </div>
      <div
        className={
          checkEditButton
            ? styles.comment_content + " " + styles.hide
            : styles.comment_content + " " + styles.display
        }
      >
        <div className={styles.comment_content1}>
          <div className={styles.user_name}>
            {user.firstName + " " + user.lastName}
          </div>
          <div
            className={styles.commentText}
            dangerouslySetInnerHTML={{ __html: comment.content }}
          ></div>
        </div>
      </div>
        <div className={localUserId==user._id ? styles.sub_button : styles.sub_button+ " " +styles.hide}>
          <div className={styles.threedot} onClick={handleOption}>
            ...
          </div>
          <div
            className={
              optionOn
                ? styles.comment_button + " " + styles.display
                : styles.comment_button + " " + styles.hide
            }
          >
            <div className={styles.comment_edit}>
              <i
                className="fa-solid fa-pen-to-square"
                onClick={() => handleEditor()}
              ></i>
              <div className={styles.comment_delete}>
                <i
                  className="fa-solid fa-x"
                  onClick={() => onDeleteComment(comment._id)}
                ></i>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Comment;
