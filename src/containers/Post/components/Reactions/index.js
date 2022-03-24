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
  const [reacted, setReacted] = useState(false);
  const userId = localStorage.getItem("userId");
  const getAllReaction = async () => {
    const res = await getReaction(postId);
    setReactionList(res.data.results);
    setReactionCount(res.data.results.length)
  };
  //Check if user id in Reaction List People
  const checkExist = () => {
    const exist = reactionList.find((value) => value.createdBy._id == userId);
    if (exist) setReacted(true);
    else setReacted(false);
  };
  useEffect(() => {
    getAllReaction();
  }, [reacted]);
  useEffect(checkExist, [reactionList]);
  //show People who reacts
  const showReactionPeople = () => {
    setShow(!show);
  };
  // console.log("Listt:", reactionPeopleList);

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
