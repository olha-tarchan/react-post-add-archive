import './App.css';
import React, {useState, useEffect} from "react";
import Posts from "./components/Posts";
import Comments from "./components/Comments";
import Context from "./context";
import ModalWindow from "./components/Modal/ModalWindow";

function App() {
    const [state, setState] = useState([
        {id: 0, title: "What is Lorem Ipsum", page: 35, forWhom: 'adult', completed: false},
        {id: 1, title: "Why do we use it?", page: 45, forWhom: 'children', completed: false},
        {id: 2, title: "Where can I get some?", page: 415, forWhom: 'children', completed: true},
        {id: 3, title: "Where does it come from?", page: 63, forWhom: 'adult', completed: false}
    ]);

    const [comments, setComments] = useState([]);
    const [modal, setModal] = useState({isOpen: false});

    const [openModal, setOpenModal] = useState(false);
    const [itemData, setItemData] = useState({});

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments?_limit=5')
            .then(response => response.json())
            .then(comments => setComments(comments));
    }, []);

    useEffect(() => {
        setModal(modal);
    }, [modal])


    const addPost = (id, title, page, forWhom) => {
        setState(state.concat([
            {
                id: Number(Date.now().toString()),
                title,
                page,
                forWhom,
                completed: false
            }
        ]));
        setOpenModal(false);
        setItemData({});
    }

    const editPost = (id, title, page, forWhom) => {
        setState(state.map(post => {
            if (post.id === id) {
                post.title = title;
                post.page = page;
                post.forWhom = forWhom;
            }
            return post
        }));
        setOpenModal(false);
        setItemData({});
    }

    const removePost = (id) => {
        setState(state.filter(list => list.id !== id));
    }

    const togglePost = (id) => {
        setState(
            state.map(post => {
                if (post.id === id) {
                    post.completed = !post.completed
                }
                return post
            })
        )
    }

    const openModalWindow = (item) => {
        if (!item) {
            item = {};
        }
        setItemData(item);
        setOpenModal(true);
    }

    const hideModal = () => {
        setItemData({});
        setOpenModal(false);
    }

    return (
        <Context.Provider value={{removePost, addPost, editPost}}>
            <div className="container pt-3">
                <div className="row">
                    <div className="col-12">
                        {/*<Modal title={modalTitle} modalShow={modal} component={ <PostForm onCreate={addPost} /> }/>*/}
                        <button onClick={() => {
                            openModalWindow({itemData})
                        }} className="btn btn-success btn-lg pl-3 mb-5">Add new Post
                        </button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 mb-3">
                        <h2>Posts</h2>
                        <Posts posts={state} completed={"false"} onToggle={togglePost}
                               openModalWithItem={openModalWindow}/>
                        <h4 className="mt-5">Archive Posts:</h4>
                        <Posts posts={state} completed={"true"} onToggle={togglePost}
                               openModalWithItem={openModalWindow}/>
                        <h2 className="mt-5 mb-3">Comments</h2>
                        <p className="text-black-50">https://jsonplaceholder.typicode.com/comments?_limit=5</p>
                        <div className="">
                            <Comments comments={comments}/>
                        </div>
                    </div>
                </div>
                {<ModalWindow
                    show={openModal}
                    itemData={itemData}
                    saveModal={addPost}
                    closeModal={hideModal}
                />}
            </div>
        </Context.Provider>
    );
}

export default App;
