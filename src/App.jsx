import React, { useReducer } from 'react';
import './App.css'; 

const initialState = {
  red: 0,
  green: 0,
  blue: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        [action.color]: Math.min(255, state[action.color] + 1),
      };
    case 'DECREMENT':
      return {
        ...state,
        [action.color]: Math.max(0, state[action.color] - 1),
      };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const rgbColor = `rgb(${state.red}, ${state.green}, ${state.blue})`;

  return (
    <div className="min-h-screen  flex flex-col items-center justify-center p-3">
      <div
        className="w-24 h-24 mb-2 rounded-[10px] "
        style={{ backgroundColor: rgbColor, transition: 'background-color 0.3s'  }}
      ></div>
      <div className="flex space-x-6">
        {['red', 'green', 'blue'].map((color) => (
          <div key={color} className="flex flex-col items-center">
            <div className="text-md font-semibold capitalize text-white mb-1">{color}</div>
            <div className="flex space-x-2 mb-1">
              <button
                onClick={() => dispatch({ type: 'DECREMENT', color })}
                className="px-2 py-1 bg-white text-[#74A4BB] rounded"
              >
                -1
              </button>
              <button
                onClick={() => dispatch({ type: 'INCREMENT', color })}
                className="px-2 py-1 bg-white text-[#74A4BB] rounded"
              >
                +1
              </button>
            </div>
            <div className="text-md font-semibold text-white">({state[color]})</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
