import React, { useEffect, useState } from "react";
import CommentCreator from "./CommentCreator";
import CommentDisplay from "./CommentDisplay";
import { getAllComments, deleteComment } from "../../../../shared/service";
import { useSelector } from "react-redux";

function Comment({ postId, commentList, total }) {
  const [comments, setComments] = useState([]);
  const [check, setCheck] = useState(false);
  const socket = useSelector(state => state.io)
  useEffect(() => {
    socket.on("comment:create", (comment) => {
      console.log(comment);
    })
  },[])
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
  const handleShowMore = () => {
    setCheck(!check);
  };
  const onDeleteComment = async (commentId) => {
    deleteComment(commentId);
    setComments(comments.filter((comment) => comment._id !== commentId));
  };

  const onCreateComment = (comment) => {
    setComments([...comments, comment]);
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
