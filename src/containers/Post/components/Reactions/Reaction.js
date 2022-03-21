import styles from "./styles.module.css";
import React, { useState } from "react";

function Reaction({
  show,
  showReactionBar,
  handleReaction,
  reaction,
  showReactionPeople,
  reactionshow,
}) {
  // console.log(reactionshow)
  const reactions = ["👍", "💖", "😁", "😯", "😢", "😡"];
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
          15.000💖
        </div>
        <div
          className={
            show
              ? styles.display + " " + styles.reaction_list
              : styles.hide + " " + styles.reaction_list
          }
        >
          {reactions.map((_reaction, index) => {
            return (
              <div
                className={styles.reaction_item}
                style={{ fontSize: 30 }}
                key={index}
                onClick={() => handleReaction(_reaction)}
              >
                {_reaction}
              </div>
            );
          })}
        </div>
        <div className={styles.action}>
          <div
            className={styles.like + " " + styles.action_item}
            onClick={showReactionBar}
          >
            {reaction}
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
