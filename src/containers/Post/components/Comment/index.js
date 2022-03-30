import React, { useEffect, useState } from "react";
import CommentCreator from "./CommentCreator";
import CommentDisplay from "./CommentDisplay";
import { getAllComments, deleteComment } from "../../../../shared/service";
import { useSelector } from "react-redux";

function Comment({ postId, commentList, total }) {
  const [comments, setComments] = useState(commentList);
  const [check, setCheck] = useState(false);
  const socket = useSelector((state) => state.io);
  useEffect(() => {
    if (check === false) {
      setComments(commentList);
    }
    if (check === true) {
      getAllComments(postId).then((res) => {
        setComments(res.data.results);
      });
    }
  }, [check]);
  useEffect(() => {
    socket.on("comment:create", (comment) => {
      setComments(prev => [...prev, comment])
    });
    socket.on("comment:delete", (comment) => {
      setComments(prev => prev.filter((com) => com._id !== comment._id));
    });
    socket.on("comment:edit", (newComment) => {
      console.log(newComment);
      setComments(comments => comments.map(comment => comment._id === newComment._id ? newComment : comment ))
    });
  }, []);
  const handleShowMore = () => {
    setCheck(true);
  };
  const onDeleteComment = async (commentId) => {
    deleteComment(commentId);
  };

  const onCreateComment = (comment) => {
    // setComments([...comments, comment]);
  };

  return (
    <div>
      {/* {console.log(comments)} */}
      <CommentDisplay
        comments={comments}
        check={check}
        handleShowMore={handleShowMore}
        onDeleteComment={onDeleteComment}
      />
      <CommentCreator postId={postId} onCreateComment={onCreateComment} />
    </div>
  );
}

export default Comment;
