import styles from "./styles.module.css";
import React, { useState } from "react";

function Reaction(props) {
<<<<<<< HEAD
  const reactions = ["👍", "💖","😁","😯","😢", "😡"]
=======
  const reactions = ["like ", "love ", "angry ", "sad ", "haha "];
>>>>>>> dce44190bf1f6e3c3a21b8e9ff65cb7a7d42da7a

  const [style, setStyle] = useState(false);
  const [reaction, setReaction] = useState("");
  const handleShow = () => {
    setStyle(!style);
  };
  return (
    <div className={styles.reaction_bar}>
      <div className={styles.reaction_count}>
<<<<<<< HEAD
        <div>15.000</div>
        💖
=======
        <div>15</div>
        <i
          className="fa-solid fa-thumbs-up"
          style={{ marginLeft: 10, fontSize: 20, color: "#1c85c4" }}
        ></i>
>>>>>>> dce44190bf1f6e3c3a21b8e9ff65cb7a7d42da7a
      </div>
      <div
        className={
          style
            ? styles.display + " " + styles.reaction_list
            : styles.hide + " " + styles.reaction_list
        }
      >
        {reactions.map((_reaction) => {
<<<<<<< HEAD
          return (
=======
>>>>>>> dce44190bf1f6e3c3a21b8e9ff65cb7a7d42da7a
            <div
              className={styles.reaction_item}
              onClick={() => {
                handleShow();
                setReaction(_reaction);
              }}
<<<<<<< HEAD
              style={{fontSize:30}}
=======
>>>>>>> dce44190bf1f6e3c3a21b8e9ff65cb7a7d42da7a
              key={_reaction._id}
            >
              {_reaction}
            </div>
<<<<<<< HEAD
          );
=======
>>>>>>> dce44190bf1f6e3c3a21b8e9ff65cb7a7d42da7a
        })}
      </div>
      <div className={styles.action}>
        <div
          className={styles.like + " " + styles.action_item}
          onClick={handleShow}
<<<<<<< HEAD
          
        >
          {reaction ? reaction : "React💕"}
=======
        >
          {reaction ? reaction : "React"}
          {(() => {
            if (reaction == "like") {
              return (
                <i
                  className="fa-solid fa-thumbs-up"
                  style={{ marginLeft: 10, fontSize: 20, color: "#1c85c4" }}
                ></i>
              );
            } else if (reaction == "love") {
              // console.log(true)
              return (
                <i
                  className="fa-solid fa-heart"
                  style={{ marginLeft: 10, fontSize: 20, color: "#1c85c4" }}
                ></i>
              );
            } else {
              return (
                <i
                  className="fa-solid fa-thumbs-up"
                  style={{ marginLeft: 10, fontSize: 20, color: "#1c85c4" }}
                ></i>
              );
            }
          })()}
>>>>>>> dce44190bf1f6e3c3a21b8e9ff65cb7a7d42da7a
        </div>
        <div className={styles.comment + " " + styles.action_item}>
          Bình luận
          <i
            className="fa-solid fa-comment"
            style={{ marginLeft: 10, fontSize: 20, color: "#1c85c4" }}
          ></i>
        </div>
        <div className={styles.comment + " " + styles.action_item}>
          Chia sẻ
          <i
            className="fa-solid fa-share"
            style={{ marginLeft: 10, fontSize: 20, color: "#1c85c4" }}
          ></i>
        </div>
      </div>
    </div>
  );
}

export default Reaction;
