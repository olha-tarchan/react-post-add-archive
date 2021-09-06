import React, {useContext} from 'react';
import Context from "../context";

const Post = ({post, onChangeCheckbox, openModalWithItem}) => {
    const classes = [];
    if (post.completed) {
        classes.push('archive');
    }
    const {removePost} = useContext(Context);
    return (
        <tr key={post.id} className={classes.join(' ')}>
            <td><input
                type="checkbox"
                checked={post.completed}
                onChange={() => onChangeCheckbox(post.id)}/>
            </td>
            <td>{post.title}</td>
            <td>{post.forWhom}</td>
            <td>{post.page}</td>
            <td><span onClick={removePost.bind(null, post.id)} className="text-primary pl-3">Delete</span></td>
            <td><span onClick={() => {
                openModalWithItem(post)
            }} className="text-primary pl-3">Edit</span></td>
        </tr>
    );
}

export default Post;