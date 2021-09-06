import React from 'react'
import Comment from "./Comment";

const Comments = ({comments}) => {
    if (!comments.length) {
        return <p className="text-center">Don't have comments yet</p>
    }
    return comments.map(comment => <Comment comment={comment} key={comment.id}/>);
}

export default Comments;