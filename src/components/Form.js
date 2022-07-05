import { useContext } from "react";
import { useState } from "react";
import ThemeContext from "./themeContext";

export default function Form() {
  const [state, setState] = useState("test");
  const [title, setTitle] = useState("");
  const [number1, setNumber1] = useState();
  const [number2, setNumber2] = useState();
  const {theme, setTheme} = useContext(ThemeContext);

  function handleSubmit(e) {
    e.preventDefault();
    alert("Form is Submitted");
  }

  function changeTitle() {
    setTitle(state);
  }

  return (
    <form className={`form ${theme}`} action="/formSubmitted" onSubmit={handleSubmit}>
      <h2>Form Title: {title}</h2>
      <p>{state}</p>
      <input
        type="text"
        value={state}
        onChange={(e) => setState(e.target.value)}
      />
      <input
        type="number"
        value={number1}
        onChange={(e) => setNumber1(e.target.value)}
      />
      <input
        type="number"
        value={number2}
        onChange={(e) => setNumber2(e.target.value)}
      />
      <p>{parseInt(number1) + parseInt(number2)}</p>
      <button type="button" onClick={changeTitle}>
        Submit
      </button>
    </form>
  );
}
