import './App.css';
import Button from './components/Button';
import Display from './components/Display';
import Title from './components/Title';
function App() {
  var counter = 0;
  const increment = () =>
  {
      counter=counter+1;
  }
  const decrement = () =>
  {
      counter=counter-1;
  }
  return (
    <div id="container" className="container">
    <Title/>
    <Display result={counter}/>
    <div id="but_container" className="but_container">
    <Button func={increment} nm="Increment"/>
    <Button func={decrement} nm="Decrement"/>
    </div>
    </div>
  );
}
export default App;
