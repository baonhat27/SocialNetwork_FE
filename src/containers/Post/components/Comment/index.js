import React, { useEffect, useState } from "react";
import CommentCreator from "./CommentCreator";
import CommentDisplay from "./CommentDisplay";
import {
  getComments,
  getAllComments,
  deleteComment,
} from "../../../../shared/service";


function Comment({ postId, commentList, total }) {
  const [comments, setComments] = useState([]);
  const [check, setCheck] = useState(false);
  const handleShowMore = () => {
    setCheck(!check);
  };
  const onDeleteComment = (commentId) => {
    deleteComment(commentId);
    setComments(comments.filter((comment) => comment._id !== commentId));
  };

  const handleCreateComment = (comment) => {
    setComments([...comments,comment]);
  };

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

  return (
    <div>
      {/* {console.log(comments)} */}
      <CommentDisplay
        comments={comments}
        check={check}
        handleShowMore={handleShowMore}
        onDeleteComment={onDeleteComment}
      />
      <CommentCreator postId={postId} onCreateComment={handleCreateComment} />
    </div>
  );
}

export default Comment;
