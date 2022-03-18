import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import CommentCreator from './CommentCreator';
import CommentDisplay from './CommentDisplay';
import {getComments} from '../../../../shared/service';

function Comment({postId}) {
    const [comments, setComments] = useState([]);
    useEffect(()=>{
        getComments(postId).then(res => {
            setComments(res.data.results)
        })
    },[])
    
    const handleCreateComment = (comment) => {
        setComments([comment, ...comments])
    }

    return (
        <div>
            {/* {console.log(comments)} */}
            <CommentDisplay comments={comments}/>
            <CommentCreator postId={postId} onCreateComment={handleCreateComment}/>
        </div>
    );
}

export default Comment;