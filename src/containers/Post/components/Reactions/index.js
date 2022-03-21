import React, { useEffect, useState } from "react";
import Reaction from "./Reaction";

function ReactionBar(props) {
  const [show, setShow] = useState(false);
  const [reactionshow, setReactionShow] = useState(false)
  const [reaction, setReaction] = useState("React💕");
  const showReactionPeople = () => {
    setReactionShow(!reactionshow)
  }
  const showReactionBar = () => {
    setShow(!show);
  };
  const handleReaction = (e) => {
    setReaction(e);
  };
  return (
    <div>
      <Reaction
        show={show}
        showReactionBar={showReactionBar}
        handleReaction={handleReaction}
        reaction={reaction}
        showReactionPeople={showReactionPeople}
        reactionshow={reactionshow}
        setReactionShow={setReactionShow}
      />
    </div>
  );
}

export default ReactionBar;
