import React from 'react';

const Comment = ({comment}) => {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{comment.email.match(/^[A-Za-z-_.]*/g)}</h5>
                <p className="text-black-50">{comment.email}</p>
                <p className="card-title">{comment.body}</p>
            </div>
        </div>
    );

}

export default Comment