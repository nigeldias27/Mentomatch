import './App.css';
import Navbar from "./components/Navbar.js";
import Dashboard from "./pages/dashboard.js";
import Interests from './pages/interestsPage';
import Landing from './pages/landingpage';
import { Routes, Route } from "react-router-dom";
import SignIn from './pages/signinPage';
import MenteeSignUp from './pages/signup';
import HomePage from './screens/Homepage';
import ProfilePage from './pages/profilePage';
import Match from './pages/match';
function App() {
  return (
    <Routes>
        <Route path="/" element={<Landing/>} />

        <Route path="/signin" element={<SignIn/>} />
        <Route path="/signup" element={<MenteeSignUp/>} />
        <Route path="/match" element={<Match/>} />
        <Route exact path="/interests/:name/:dob/:pass/:email" element={<Interests />} />
        <Route exact path='/dashboard' element={<Dashboard/>}/>
        <Route exact path='/profile/:name' element={<ProfilePage/>}/>
        </Routes>
  );
}

export default App;
