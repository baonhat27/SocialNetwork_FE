import React from 'react';
import CommentCreator from './CommentCreator';
import CommentDisplay from './CommentDisplay';

function Comment(props) {
    return (
        <div>
            <CommentDisplay/>
            <CommentCreator/>
        </div>
    );
}

export default Comment;