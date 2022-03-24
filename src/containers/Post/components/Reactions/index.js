import { responsiveArray } from "antd/lib/_util/responsiveObserve";
import React, { useEffect, useState } from "react";
import {
  createReaction,
  deleteReaction,
  getReaction,
} from "../../../../shared/service";
import Reaction from "./Reaction";

function ReactionBar({ postId }) {
  const [show, setShow] = useState(false);
  const [reactionList, setReactionList] = useState([]);
  const [reactionCount, setReactionCount] = useState();
  const [reacted, setReacted] = useState();
  const userId = localStorage.getItem("userId");
  const getAllReaction = async () => {
    const res = await getReaction(postId);
    setReactionList(res.data.results);
    setReactionCount(res.data.results.length);
  };
  //Check if user id in Reaction List People
  const checkExist = () => {
    const exist = reactionList.find((value) => {
      return value.createdBy._id == userId && value.isDeleted == false;
    });
    if (exist) setReacted(true);
    else setReacted(false);
  };
  useEffect(() => {
    getAllReaction();
  }, [show]);
  useEffect(checkExist, [reactionList]);
  const showReactionPeople = () => {
    setShow(!show);
  };

  const handleReaction = () => {
    if (reacted == false) {
      createReaction(postId);
      setReactionCount((prev) => prev + 1);
    } else {
      deleteReaction(postId);
      setReactionCount((prev) => prev - 1);
    }
    setReacted(!reacted);
  };
  return (
    <div>
      <Reaction
        reactionCount={reactionCount}
        show={show}
        showReactionPeople={showReactionPeople}
        handleReaction={handleReaction}
        reacted={reacted}
        reactionList={reactionList}
      />
    </div>
  );
}

export default ReactionBar;
