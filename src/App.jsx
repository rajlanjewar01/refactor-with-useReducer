import { useReducer } from 'react';

const reducer = (state, action) => {

};

function App() {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    valueToAdd: 0
  });

  const increment = () => {
   
  };

  const handleChange = (event) => {
    const value = parseInt(event.target.value) || 0;
    
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    
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
