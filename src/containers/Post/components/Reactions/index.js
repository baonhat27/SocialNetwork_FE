import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { createReaction, deleteReaction } from "../../../../shared/service";
import Reaction from "./Reaction";

function ReactionBar({ reactionPeopleList, postId }) {
  const user = useSelector((state) => state.user);
  const [reactionshow, setReactionShow] = useState(false);
  const [checkReactionClick, setCheckReactionClick] = useState();
  const [reactionCount, setReactionCount] = useState(reactionPeopleList.length);
  for (const reaction of reactionPeopleList) {
    if (reaction.createdBy._id == user.id) {
      console.log(true);
      break;
    }
  }

  const showReactionPeople = () => {
    setReactionShow(!reactionshow);
  };
  const getReactionPeople = () => {};
  const onCreateReaction = () => {
    if (!checkReactionClick) {
      createReaction(postId);
    }
    setCheckReactionClick(!checkReactionClick);
  };
  const onDeleteReaction = () => {
    if (checkReactionClick) {
      deleteReaction(postId);
    }
    setCheckReactionClick(!checkReactionClick);
  };
  return (
    <div>
      <Reaction
        showReactionPeople={showReactionPeople}
        reactionshow={reactionshow}
        reactionPeopleList={reactionPeopleList}
        checkReactionClick={checkReactionClick}
        reactionCount={reactionCount}
        setReactionCount={setReactionCount}
        onCreateReaction={onCreateReaction}
        onDeleteReaction={onDeleteReaction}
      />
    </div>
  );
}

export default ReactionBar;
