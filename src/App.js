import './App.css';
import Navbar from "./components/Navbar.js";
import Dashboard from "./pages/dashboard.js";
import Interests from './pages/interestsPage';
import Landing from './pages/landingpage';
import { Routes, Route } from "react-router-dom";
import SignIn from './pages/signinPage';
import MenteeSignUp from './pages/signup';
function App() {
  return (
    <Routes>
        <Route path="/" element={<SignIn/>} />
        <Route exact path="/interests/:name/:dob/:pass/:email" element={<Interests />} />
        <Route exact path='/dashboard' element={<Dashboard/>}/>
      </Routes>
  );
}

export default App;
