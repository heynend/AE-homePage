import { useNavigate } from "react-router-dom";
import './worksheetPage.css';

export default function WorksheetPage() {

    const navigate = useNavigate();

    const handleHomeButton = () => {
        navigate('/');
    }
    const handleEstimateButton = () => {
        navigate('/estimate');
    }
    const handleResourcePlanButton = () => {
        navigate('/resource-plan');
    }
    const handlePreferencesButton = () => {
        navigate('/preferences');
    }

    return (
        <div className="worksheetPage">
            <h2>Worksheet Page</h2>
            <button onClick={() => handleHomeButton()}>
                Home
            </button>
            <button onClick={() => handleEstimateButton()}>
                Estimate
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