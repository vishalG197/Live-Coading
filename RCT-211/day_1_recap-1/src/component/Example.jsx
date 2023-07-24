import React, { useState, useEffect } from 'react';

const Example = () => {
  const [counter, setCounter] = useState(0);
  const [data, setData] = useState([]);

  // Side effect 1: Update document title
  useEffect(() => {
    document.title = `Counter: ${counter}`;
  }, [counter]);

  // Side effect 2: Fetch data from an API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.example.com/data');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Side effect 3: Perform cleanup
  useEffect(() => {
    const timer = setInterval(() => {
      setCounter(prevCounter => prevCounter + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <h1>Example Component</h1>
      <p>Counter: {counter}</p>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Example;
