import './App.css';
import Homepage from './components/HomePage';
import Aboutme from './components/AboutMe';
import {Routes,Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <nav className="nav">
        <a href="#" className="nav-item">Home Page</a>
        <a href="#" className="nav-item">About Me</a>
      </nav>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/' element={<Aboutme/>}/>
    </div>
  );
}

export default App;
