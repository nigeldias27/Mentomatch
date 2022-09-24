import './App.css';
import Navbar from "./components/Navbar.js";
import Dashboard from "./pages/dashboard.js";
import Landing from './pages/landingpage';
import ProfilePage from "./pages/profilePage";
import MenteeSignUp from "./pages/menteeSignUp"

function App() {
  return (
    <div className="App">
      <ProfilePage />
    </div>
  );
}

export default App;
