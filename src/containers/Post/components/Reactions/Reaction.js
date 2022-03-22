import styles from "./styles.module.css";
import React, { useState } from "react";

function Reaction({
  onCreateReaction,
  onDeleteReaction,
  showReactionPeople,
  reactionshow,
  checkReactionClick,
  setReactionCount,
  reactionCount,
}) {
  // console.log(checkReactionClick);
  return (
    <div>
      <div
        className={
          reactionshow
            ? styles.display + " " + styles.reaction_modal
            : styles.hide + " " + styles.reaction_modal
        }
        onClick={showReactionPeople}
      ></div>
      <div
        className={
          reactionshow
            ? styles.display + " " + styles.reaction_people_list
            : styles.hide + " " + styles.reaction_people_list
        }
      >
        <div className={styles.reaction_people}></div>
      </div>
      <div className={styles.reaction_bar}>
        <div className={styles.reaction_count} onClick={showReactionPeople}>
          💖{reactionCount ? reactionCount : ""}
        </div>
        <div className={styles.action}>
          <div
            className={styles.like + " " + styles.action_item}
            onClick={checkReactionClick ? onDeleteReaction : onCreateReaction}
          >
            <i
              className={ 
                checkReactionClick
                  ? "fa-solid fa-heart" + " " + styles.liked
                  : "fa-regular fa-heart"
              }
            ></i>
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
    </div>
  );
}

export default Reaction;
