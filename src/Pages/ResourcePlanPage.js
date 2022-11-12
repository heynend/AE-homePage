import { useNavigate } from "react-router-dom";
import './resourcePlanPage.css';

export default function ResourcePlanPage() {

    const navigate = useNavigate();

    const handleHomeButton = () => {
        navigate('/');
    }
    const handleWorksheetButton = () => {
        navigate('/worksheet');
    }
    const handleEstimateButton = () => {
        navigate('/estimate');
    }
    const handlePreferencesButton = () => {
        navigate('/preferences');
    }

    return (
        <div className="resourcePlanPage">
            <h2>Resource Plan Page</h2>
            <button onClick={() => handleHomeButton()}>
                Home
            </button>
            <button onClick={() => handleWorksheetButton()}>
                Worksheet
            </button>
            <button onClick={() => handleEstimateButton()}>
                Estimate
            </button>
            <button onClick={() => handlePreferencesButton()}>
                Preferences
            </button>
        </div>
    )

}