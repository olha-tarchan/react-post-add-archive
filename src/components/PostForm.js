import React, {useState, useEffect} from 'react';


function useInputValue(defaultValue = '') {
    const [value, setValue] = useState(defaultValue)

    return {
        property: {
            value,
            onChange: event => setValue(event.target.value)
        },
        clear: () => setValue(''),
        value: () => value
    }
}

export const PostForm = (props) => {

    const initialData = {id: -1, title: "", page: 0, forWhom: '', completed: false};

    const titlePage = (typeof props.post.id === 'number') ? 'Edit post' : 'Create new post';
    const usePost = (typeof props.post.id === 'number') ? props.post : initialData;
    const paramForWhom = (typeof props.post.id === 'number') ? props.post.forWhom : '';

    const [post, setPost] = useState(usePost);
    let inputCustom = useInputValue(paramForWhom);
    const [error, setError] = useState('');


    useEffect(() => {
        setError(error);
    }, [error]);

    const submitHandler = event => {
        event.preventDefault();

        const title = post.title;
        const page = post.page;
        const id = post.id;

        if (!title.trim()) {
            return setError('Fill in the fields');
        }

        props.onCreate(id, title, page, inputCustom.value());

        setPost(initialData);
        inputCustom.clear();
        setError('');
    }

    const changeInputHandler = event => {
        event.persist();
        setPost(prev => ({
            ...prev, ...{
                [event.target.name]: event.target.value
            }
        }));
    }

    return (
        <form onSubmit={submitHandler}>
            <h4>{titlePage}</h4>
            <div className="form-group">
                <label htmlFor="title">Title post {error.length ?
                    <span className="text-danger"> {error}</span> : ''}</label>
                <input
                    type="text"
                    className="form-control mb-3"
                    id="title"
                    value={post.title}
                    name="title"
                    onChange={changeInputHandler}
                />
                <label htmlFor="title">Pages in post</label>
                <input
                    type="text"
                    className="form-control mb-3"
                    id="page"
                    value={post.page}
                    name="page"
                    onChange={changeInputHandler}
                />
                Custom hook for input:
                <label htmlFor="forWhom">For:</label>
                <input {...inputCustom.property} className="form-control"/>
            </div>
            <button className="btn btn-success mb-2" type="submit">Save</button>
        </form>
    )
}