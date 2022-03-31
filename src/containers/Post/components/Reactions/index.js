import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  createReaction,
  deleteReaction,
  getReaction,
} from "../../../../shared/service";
import Reaction from "./Reaction";

function ReactionBar({ postId, reactions, isReact }) {
  const [show, setShow] = useState(false);
  const [reacted, setReacted] = useState(isReact);
  const [reactionList, setReactionList] = useState([]);
  const [reactionCount, setReactionCount] = useState(reactions.total);
  const io = useSelector((state) => state.io);
  useEffect(() => {
    io.on("reaction:create", (data) => {
      setReactionCount(prev => prev + 1)
    });
    io.on("reaction:delete", (data) => {
      setReactionCount(prev => prev - 1)
    });
  }, []);
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
      // setReactionCount((prev) => prev + 1);
    } else {
      deleteReaction(postId);
      // setReactionCount((prev) => prev - 1);
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
        isReact={reacted}
        reactionList={reactionList}
      />
    </div>
  );
}

export default ReactionBar;
