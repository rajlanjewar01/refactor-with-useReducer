import { useReducer } from 'react';
const INCREMENT = 'increment';
const DECREMENT = 'decrement';
const CHANGE_VALUE_TO_ADD = 'change-value-to-add';
const SET_VALUE_TO_ADD = 'set-value-to-add';

const reducer = (state, action) => {
  switch(action.type) {
    case INCREMENT: 
      return {
        ...state,
        count: state.count + 1
      }

    case DECREMENT:
      return {
        ...state,
        count: state.count - 1
      }

    case CHANGE_VALUE_TO_ADD:
      return {
        ...state,
        valueToAdd: action.payload
      }
    
    case SET_VALUE_TO_ADD:
      return {
        ...state,
        count: state.count + state.valueToAdd,
        valueToAdd: 0
      }

    default:
      return state
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    valueToAdd: 0
  });

  const increment = () => {
   dispatch({
    type: INCREMENT
   });
  };

  const decrement = () => {
    dispatch({
      type: DECREMENT
    })
  }

  const handleChange = (event) => {
    const value = parseInt(event.target.value) || 0;

    dispatch({
      type: CHANGE_VALUE_TO_ADD,
      payload: value
    });    
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: SET_VALUE_TO_ADD
    })

  }
  console.log(state)

  return (
    <>
      {state.count}
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>decrement</button>

      <form onSubmit={handleSubmit}>
        Add a lot: <input type="number" value={state.valueToAdd || ''} onChange={handleChange} /> <br />
        <button type="submit">Add</button>
      </form>
    </>
  )
}

export default App
