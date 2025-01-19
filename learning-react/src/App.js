import './App.css';
import Button from './components/Button';
import Display from './components/Display';
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
    <Display result={counter}/>
    <Button func={increment} nm="Increment"/>
    <Button func={decrement} nm="Decrement"/>
    </div>
  );
}
export default App;
