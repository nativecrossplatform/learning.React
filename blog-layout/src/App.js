import './App.css';
import './components/Footer'
import Nav from './components/Nav';
import Promo from './components/Promo';
import Intro1 from './components/Intro1';
import Intro2 from './components/Intro2';
import Intro3 from './components/Intro3';
import Footer from './components/Footer';
function App(props) 
{
  const stlapp = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    
    padding: '10px',
  };
  const padd = {
      padding:'0'
  }
  return (
    <div style = {stlapp}>
      <div className='nav_pos' style={padd}><Nav /></div>
      <div className='promo_pos' style={padd}><Promo /></div>
      <div className='intro1_pos' style={padd}><Intro1 /></div>
      <div className='intro2_pos' style={padd}><Intro2 /></div>
      <div className='intro3_pos' style={padd}><Intro3 /></div>
      <div className='props_pos' style={padd}><h1>Dynamic Name Will Be Displayed Here {props.title}</h1></div>
      <div className='footer_pos' style={padd}><Footer /></div>
    </div>
  );
}
export default App;