import React, {useState} from 'react';
import './navbar.css';

const Navbar = () => {
    const [info, setInfo] = useState(false);
    const handlePanel = () => {
        setInfo(!info);
        if (info) {
        }
    }
    return (
        <header className="header">
            <div className="base">
                <div className="container h-container">
                    <div className="title">Tarchan Olha</div>
                    <div onClick={handlePanel}
                         className="info">
                        Info
                        <span data-show={info} className="info-mark">&#10142;</span>
                    </div>
                    <div className="git">
                        <div className="git-svg">
                            <svg height="20" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="20"
                                 data-view-component="true" className="octicon octicon-mark-github v-align-middle">
                                <path fillRule="evenodd"
                                      d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                            </svg>
                        </div>
                        <a href="https://github.com/olha-tarchan/react-post-add-archive">github</a>
                    </div>
                </div>

            </div>
            <div className="info-project" data-show={info}>
                <div className="container">
                    <p>Project wrote on React. Users can change list of notes:</p>
                    <ul>
                        <li>add</li>
                        <li>edit</li>
                        <li>send to archive</li>
                        <li>remove</li>
                    </ul>
                    <p>List of notes displayed in a form of table. Archived notes are not shown in the notes list. Users
                        can view archived notes and unarchive them.</p>
                </div>
            </div>


        </header>
    );
};

export default Navbar;