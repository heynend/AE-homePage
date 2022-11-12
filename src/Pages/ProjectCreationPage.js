import { useNavigate } from "react-router-dom";
import './projectCreationPage.css';
import augustoLogo1 from './augustoLogo1.png';
import augustoLogo2 from './augustoLogo2.png';

export default function ProjectCreationPage() {
    //page navigation
    const navigate = useNavigate();
    const handleHomeButton = () => {
        navigate('/');
    }
    const handleOpenProjectButton = () => {
        navigate('/worksheet');
    }

    return (
        <div className="projectCreationPage">

            <div className="project-creation-nav-bar">
                <div className="home-text" onClick={() => handleHomeButton()}>
                    Home
                </div>
                <img src={augustoLogo1} alt="Logo 1" style={{width: '130px'}}/>
                <div className="create-project-text" onClick={() => handleOpenProjectButton()}>
                    Create Project
                </div>
            </div>

            <div className = "body-properties">
                <div className="new-project-creation-text">
                    New Project Creation
                </div>
                <div className="green-dash"></div>
                    <div className="body-new-project">
                        <div className="input-body">
                            <div className="input-id-text">
                                Client Name:
                            </div>
                            <input className="input-field">
                                {/* process body input and sent to database IF 'Create Project' button clicked */}
                            </input>
                        </div>
                        <div className="input-body">
                            <div className="input-id-text">
                                Project Name:
                            </div>
                            <input className="input-field">
                                {/* process body input and sent to database IF 'Create Project' button clicked */}
                            </input>
                        </div>
                        <div className="input-body">
                            <div className="input-id-text">
                                Client Product Owner:
                            </div>
                            <input className="input-field">
                                {/* process body input and sent to database IF 'Create Project' button clicked */}
                            </input>
                        </div>
                        <div className="input-body">
                            <div className="input-id-text">
                                Client Budget:
                            </div>
                            <input className="input-field">
                                {/* process body input and sent to database IF 'Create Project' button clicked */}
                            </input>
                        </div>
                        <div className="input-body">
                            <div className="input-id-text">
                                Start Date:
                            </div>
                            <input className="input-field">
                                {/* process body input and sent to database IF 'Create Project' button clicked */}
                            </input>
                        </div>
                        <div className="input-body">
                            <div className="input-id-text">
                                End Date:
                            </div>
                            <input className="input-field">
                                {/* process body input and sent to database IF 'Create Project' button clicked */}
                            </input>
                        </div>
                        <img className="logo2-positioning-projcre" src={augustoLogo2} alt="Logo 2" />
                    </div>
            </div>

        </div>
    )
}