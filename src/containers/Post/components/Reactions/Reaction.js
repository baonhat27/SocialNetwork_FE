import styles from "./styles.module.css";
import React, { useState } from "react";
import { Avatar } from "antd";

function Reaction({
  reactionCount,
  show,
  showReactionPeople,
  handleReaction,
  reacted,
  reactionList,
}) {
  return (
    <div>
      {/* Modal  */}
      <div
        className={
<<<<<<< HEAD
          show
            ? styles.display + " " + styles.reaction_modal
            : styles.hide + " " + styles.reaction_modal
        }
        onClick={showReactionPeople}
      ></div>
      {/* Bang nhung nguoi react  */}
      <div
        className={
          show
            ? styles.display + " " + styles.reaction_people_list_container
            : styles.hide + " " + styles.reaction_people_list_container
        }
      >
        <div className={styles.list_text}>Những người đã ❤ bài viết này</div>
        <div className={styles.reaction_people_list}>
          {reactionList.map((reactionPeople, index) => {
            const user = reactionPeople.createdBy;
=======
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
>>>>>>> 0d8e2ff28a973aef0da7812ce8e8c87efaa683cf
            return (
              <div className={styles.reaction_people} key={index}>
                <Avatar
                  src={user.avatar}
                  style={{ border: "1px solid #1c85c4", marginRight: "20px" }}
                  size={40}
                />
                <div className={styles.user_name}>
                  {user.firstName + " " + user.lastName}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.reaction_bar}>
        <div className={styles.count_bar}>
          <div className={styles.reaction_count} onClick={showReactionPeople}>
            {reactionCount ? `❤${reactionCount}` : ""}
          </div>
        </div>
        <div className={styles.action}>
          <div
            className={styles.like + " " + styles.action_item}
            onClick={handleReaction}
          >
            <i
              className={
                reacted
                  ? "fa-solid fa-heart" + " " + styles.liked
                  : "fa-regular fa-heart"
              }
              // className="fa-solid fa-heart"
            ></i>
          </div>
          <div className={styles.comment + " " + styles.action_item}>
            <i
              className="fa-regular fa-message"
              style={{ marginLeft: 10, fontSize: 20 }}
            ></i>
          </div>
          <div className={styles.share + " " + styles.action_item}>
            <i
              className="fa-regular fa-share-from-square"
              style={{ marginLeft: 10, fontSize: 20 }}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reaction;
