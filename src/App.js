//imports
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route
}  from 'react-router-dom';

import HomePage from "./Pages/HomePage";
import ProjectCreationPage from './Pages/ProjectCreationPage';
import WorksheetPage from './Pages/WorksheetPage';
import ResourcePlanPage from './Pages/ResourcePlanPage';
import PreferencesPage from './Pages/PreferencesPage';
import EstimatePage from './Pages/EstimatePage';


export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          
          <Route path='/AE-homePage' element={ <HomePage/> } />
          <Route path='/project-creation' element={ <ProjectCreationPage/> } />
          <Route path='/worksheet' element={ <WorksheetPage/> } />
          <Route path='/resource-plan' element={ <ResourcePlanPage/> } />
          <Route path='/preferences' element={ <PreferencesPage/> } />
          <Route path='/estimate' element={ <EstimatePage/> } />


        </Routes>
      </Router>
    </div>
  );
}