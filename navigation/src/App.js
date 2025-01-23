import './App.css';
import Homepage from './components/HomePage';
import Aboutme from './components/AboutMe';
function App() {
  return (
    <div className="App">
      <nav className="nav">
        <a href="#" className="nav-item">Home Page</a>
        <a href="#" className="nav-item">About Me</a>
      </nav>
      <Homepage/>
      <Aboutme/>
    </div>
  );
}

export default App;
