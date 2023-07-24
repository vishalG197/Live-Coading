import React, { useState, useEffect } from 'react';

const ExampleComponent = () => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');

  // Effect with no dependencies
  useEffect(() => {
    console.log('Effect without dependencies');
    // Perform some side effect or logic
    return () => {
      console.log('Cleanup without dependencies');
      // Perform cleanup logic (optional)
    };
  }, []);

  // Effect with specific dependency (count)
  useEffect(() => {
    console.log('Effect with count dependency');
    // Perform some side effect or logic based on count
    return () => {
      console.log('Cleanup with count dependency');
      // Perform cleanup logic (optional)
    };
  }, [count]);

  // Effect with array of dependencies (count and message)
  useEffect(() => {
    console.log('Effect with array of dependencies');
    // Perform some side effect or logic based on count and message
    return () => {
      console.log('Cleanup with array of dependencies');
      // Perform cleanup logic (optional)
    };
  }, [count, message]);

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  };

  const updateMessage = () => {
    setMessage('Updated message');
  };

  return (
    <div>
      <h1>useEffect Dependency Examples</h1>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment Count</button>
      <br />
      <br />
      <p>Message: {message}</p>
      <button onClick={updateMessage}>Update Message</button>
    </div>
  );
};

export default ExampleComponent;
