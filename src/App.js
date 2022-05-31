import './App.css';

import {Route, BrowserRouter as Router, Routes} from "react-router-dom"

import Navigation from './components/Navigation';
import Profile from './components/Profile';
import Teams from './components/Teams';
import WeekPlan from './components/WeekPlan';
import Workers from './employees.json';

function App() {
  return (
    <Router>
    <div>
   {/*  <Profile/> */}
    <Navigation/>
    <Routes>
     <Route path="/teams/" element={ <Teams/>}/>
     <Route path="/week-plan/" element={ <WeekPlan/>}/>
   </Routes>
   </div>
   </Router>
    
  );
}

export default App;
