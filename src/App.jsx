import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [valueToAdd, setValueToAdd] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const handleChange = (event) => {
    const value = parseInt(event.target.value) || 0;
    setValueToAdd(value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setCount(count + valueToAdd);
    setValueToAdd(0);
  }

  return (
    <>
      {count}
      <button onClick={increment}>Increment</button>

      <form onSubmit={handleSubmit}>
        Add a lot: <input type="number" value={valueToAdd || ''} onChange={handleChange} /> <br />
        <button type="submit">Add</button>
      </form>
    </>
  )
}

export default App
