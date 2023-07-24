import logo from './logo.svg';
import './App.css';
import AllRoutes from './component/AllRoutes';
import Square from './component/Square';

function App() {
  return (
    <div className="App">
    
    </div>
  );
}

export default App;
// In this code, we have three separate useEffect hooks with different dependency configurations:

// useEffect with No Dependencies:

// This effect runs only once after the initial render because an empty dependency array ([]) is provided. It logs a message to the console indicating that it's running without dependencies. It also returns a cleanup function, which is invoked when the component unmounts or before re-execution.
// useEffect with a Specific Dependency (count):

// This effect runs whenever the value of count changes. It logs a message to the console indicating that it's running with a count dependency. It also returns a cleanup function that is invoked before the next effect execution or when the component unmounts.
// useEffect with an Array of Dependencies (count and message):

// This effect runs whenever either the value of count or message changes. It logs a message to the console indicating that it's running with an array of dependencies. It also returns a cleanup function that is invoked before the next effect execution or when the component unmounts.
// The code also includes buttons to increment the count and update the message, allowing you to trigger changes and observe the effects being executed based on the specified dependencies.

// By examining the console logs and observing the behavior when interacting with the component, you can better understand how the useEffect hook behaves with different dependency configurations