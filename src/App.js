import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar.js";
import SignIn from './pages/signinPage';
import MenteeSignUp from './pages/menteeSignUp';

function App() {
  return (
    <div className="App">
      <MenteeSignUp />
    </div>
  );
}

export default App;
