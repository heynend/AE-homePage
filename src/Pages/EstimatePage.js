import { useNavigate } from "react-router-dom";
import './estimatePage.css';

export default function EstimatePage() {

    const navigate = useNavigate();

    const handleHomeButton = () => {
        navigate('/AE-homePage');
    }
    const handleWorksheetButton = () => {
        navigate('/worksheet');
    }
    const handleResourcePlanButton = () => {
        navigate('/resource-plan');
    }
    const handlePreferencesButton = () => {
        navigate('/preferences');
    }

    return (
        <div className="estimatePage">
            <h2>Estimate Page</h2>
            <button onClick={() => handleHomeButton()}>
                Home
            </button>
            <button onClick={() => handleWorksheetButton()}>
                Worksheet
            </button>
            <button onClick={() => handleResourcePlanButton()}>
                Resource Plan
            </button>
            <button onClick={() => handlePreferencesButton()}>
                Preferences
            </button>
        </div>
    )

}