import { useNavigate } from "react-router-dom";
import './homePage.css';
import augustoLogo1 from './augustoLogo1.png';
import augustoLogo2 from './augustoLogo2.png';
import React, { useState } from "react";

export default function HomePage() {
    // page navigation
    const navigate = useNavigate();
    const handleCreateProjectButton = () => {
        navigate('/project-creation');
    }

    //const [test,setTest] = useState(false);

    return (
        <div className="homePage">
            {/*<button onClick={() => setTest(!test)}>{String(test)}</button>*/}
            <div className="home-nav-bar">
                <div className="create-project-button" onClick={() => handleCreateProjectButton()}>
                    Create Project
                </div>
                <img src={augustoLogo1} alt="Logo 1" style={{width: '130px'}}/>
                <div className="search-bar">
                    <label>Search for Projects</label>
                    <div className="search-bar-border">
                        <input className="search-bar-input" type="text" />
                    </div>
                </div>
            </div>
            <div className="body-properties">
                <div className="recent-projects-text">
                    Recent Projects
                </div>
                <div className="green-dash"></div>
                <div className="body">
                    {/*FIXME: add previous projects from database*/}
                    {/*need to import barlow font, add project blocks from database, add search filtering*/}
                </div>
                <img className="logo2-positioning" src={augustoLogo2} alt="Logo 2" />
            </div>
        </div>
    )
}