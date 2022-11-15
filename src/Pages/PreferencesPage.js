import { useNavigate } from "react-router-dom";
import './preferencesPage.css';

export default function PreferencesPage() {

    const navigate = useNavigate();

    const handleHomeButton = () => {
        navigate('/AE-homePage');
    }
    const handleWorksheetButton = () => {
        navigate('/worksheet');
    }
    const handleEstimateButton = () => {
        navigate('/estimate');
    }
    const handleResourcePlanButton = () => {
        navigate('/resource-plan');
    }

    return (
        <div className="preferencesPage">
            <h2>Preference Page</h2>
            <button onClick={() => handleHomeButton()}>
                Home
            </button>
            <button onClick={() => handleWorksheetButton()}>
                Worksheet
            </button>
            <button onClick={() => handleEstimateButton()}>
                Estimate
            </button>
            <button onClick={() => handleResourcePlanButton()}>
                Resource Plan
            </button>
        </div>
    )

}