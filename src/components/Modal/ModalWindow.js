import React, {useContext} from "react";
import './Modal.css';
import {PostForm} from "../PostForm";
import Context from "../../context";

function ModalWindow({closeModal, show, itemData}) {
    const {editPost, addPost} = useContext(Context);

    return (
        <>
            {show && (
                <div className={'modal'}>
                    <div className="modal-body">
                        <PostForm post={itemData} onCreate={(typeof itemData.id !== 'number') ? addPost : editPost}/>
                        <button onClick={closeModal} className="btn btn-outline-secondary mb-2 float-right">Close
                        </button>
                    </div>
                </div>
            )}
        </>
    )
}

export default ModalWindow;