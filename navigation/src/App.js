import './App.css';
import Homepage from './components/HomePage';
import Aboutme from './components/AboutMe';
import {Routes,Route, Link} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <nav className="nav">
        <Link to='/' className="nav-tem" >Home Page</Link>
        <Link to='/about-me' className="nav-tem" >About Me</Link>
      </nav>
      <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/about-me' element={<Aboutme/>}/>
      </Routes>
    </div>
  );
}
export default App;
