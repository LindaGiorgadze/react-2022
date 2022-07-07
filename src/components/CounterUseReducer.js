import { useReducer } from "react";

const initialState = { count: 5 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.value };
    case "decrement":
      return { count: state.count - action.value };
    default:
      throw new Error();
  }
}

export default function CounterUseReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <section>
      <h3>Counter with useReducer</h3>
      <p>{state.count}</p>
      <button onClick={() => dispatch({ type: "decrement", value: 2})}>-</button>
      <button onClick={() => dispatch({ type: "increment", value: 5})}>+</button>
    </section>
  );
}
