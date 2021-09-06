import React from 'react';
import Post from "./Post";

const Posts = (props) => {
    const postTrue = [...props.posts].filter(post => post.completed === true);
    const postFalse = [...props.posts].filter(post => post.completed === false);

    if (props.completed === "true") {
        return (postTrue.length) ?
            (
                <table className="table table-responsive w-100 d-block d-md-table">
                    <tbody>
                    <tr>
                        <th>Archive</th>
                        <th>Title</th>
                        <th>for whom</th>
                        <th>Page</th>
                        <th></th>
                        <th></th>

                    </tr>
                    {
                        postTrue.map(post => {
                            return (
                                <Post
                                    post={post}
                                    key={post.id}
                                    onChangeCheckbox={props.onToggle}
                                    openModalWithItem={props.openModalWithItem}
                                />
                            )
                        })
                    }
                    </tbody>
                </table>
            ) :
            <p className="text-center">Don't have archive posts yet</p>
    }

    if (props.completed === "false") {
        return (postFalse.length) ?
            (
                <table className="table table-responsive w-100 d-block d-md-table">
                    <tbody>
                    <tr>
                        <th>Archive</th>
                        <th>Title</th>
                        <th>for whom</th>
                        <th>Page</th>
                        <th></th>
                        <th></th>

                    </tr>
                    {
                        postFalse.map(post => {
                            return (
                                <Post
                                    post={post}
                                    key={post.id}
                                    onChangeCheckbox={props.onToggle}
                                    openModalWithItem={props.openModalWithItem}
                                />
                            )
                        })
                    }
                    </tbody>
                </table>
            ) :
            <p className="text-center">Don't have posts yet</p>
    }
}

export default Posts;