import logo from './logo.svg';
import './App.css';
import Counter from './Component/Counter';
import Timer from './Component/Timer';
import ReducerFrom from './Component/ReducerFrom';
import ClickMe from './Component/ClickMe';
import Throttle from './Component/Throttle';

function App() {
  return (
    <div className="App">
    <Counter/>
    <Timer/>
    <ReducerFrom/>
    <ClickMe/>
    <Throttle/>
    </div>
  );
}

export default App;
