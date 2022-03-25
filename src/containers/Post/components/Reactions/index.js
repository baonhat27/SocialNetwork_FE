import { responsiveArray } from "antd/lib/_util/responsiveObserve";
import React, { useEffect, useState } from "react";
import {
  createReaction,
  deleteReaction,
  getReaction,
} from "../../../../shared/service";
import Reaction from "./Reaction";

function ReactionBar({ postId, reactions, isReact }) {
  const [show, setShow] = useState(false);
  const [reacted,setReacted] = useState(isReact)
  const [reactionList, setReactionList] = useState([]);
  const [reactionCount, setReactionCount] = useState(reactions.total);
  // const [reacted, setReacted] = useState(isReacted);
  const userId = localStorage.getItem("userId");
  const getAllReaction = async () => {
    const res = await getReaction(postId);
    setReactionList(res.data.results);
    setReactionCount(res.data.results.length);
  };
  const showReactionPeople = () => {
    setShow(!show);
    getAllReaction();
  };
  const handleReaction = () => {
    if (reacted === false) {
      createReaction(postId);
      setReactionCount((prev) => prev + 1);
    } else {
      deleteReaction(postId);
      setReactionCount((prev) => prev - 1);
    }
    setReacted(!reacted)
  };
  return (
    <div>
      <Reaction
        reactionCount={reactionCount}
        show={show}
        showReactionPeople={showReactionPeople}
        handleReaction={handleReaction}
        isReact={reacted}
        reactionList={reactionList}
      />
    </div>
  );
}

export default ReactionBar;
