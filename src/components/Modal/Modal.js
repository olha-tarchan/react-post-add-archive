import React, {useState} from 'react'
import './Modal.css';

export const Modal = (props) => {
    const [modal, setModal] = useState({isOpen: false});

    return (
        <React.Fragment>
            <button onClick={() => setModal({isOpen: true})} className="mb-5 btn btn-outline-info">
                Create
            </button>


            {modal.isOpen | props.isOpen && (
                <div className='modal'>
                    <div className='modal-body'>
                        {props.title}
                        {props.component}

                        <button onClick={() => setModal({isOpen: false})} className="btn btn-outline-info float-right">
                            Close
                        </button>
                    </div>
                </div>
            )}
        </React.Fragment>
    )
}