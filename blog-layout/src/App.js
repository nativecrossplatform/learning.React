import './App.css';
import './components/Footer'
import Nav from './components/Nav';
import Promo from './components/Promo';
import Intro1 from './components/Intro1';
import Intro2 from './components/Intro2';
import Intro3 from './components/Intro3';
import Footer from './components/Footer';
function App(props) {
  return (
    <div>
      <div className='nav_pos'><Nav /></div>
      <div className='promo_pos'><Promo /></div>
      <div className='intro1_pos'><Intro1 /></div>
      <div className='intro2_pos'><Intro2 /></div>
      <div className='intro3_pos'><Intro3 /></div>
      <div className='props_pos'><h1>Dynamic Name Will Be Displayed Here {props.title}</h1></div>
      <div className='footer_pos'><Footer /></div>
    </div>
  );
}
export default App;