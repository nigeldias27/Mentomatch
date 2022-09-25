import './App.css';
import Navbar from "./components/Navbar.js";
import Dashboard from "./pages/dashboard.js";
import Interests from './pages/interestsPage';
import Landing from './pages/landingpage';
import { Routes, Route } from "react-router-dom";
import SignIn from './pages/signinPage';
import MenteeSignUp from './pages/signup';
import HomePage from './screens/Homepage';
import ProfilePage from "./pages/profilePage"

function App() {
  return (
    <Landing />
  );
}

export default App;
