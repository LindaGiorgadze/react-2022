import { useReducer } from "react";

const initialValue = {
  name: "Name",
  surname: "",
  email: "",
  password: ""
};

function changeValues(state, action) {
    return ({ ...state, ...{[action.type]: action.value }});
//   switch (action.type) {
//     case "name":
//       return { ...state, ...{ name: action.value } };
//     case "surname":
//       return { ...state, ...{ surname: action.value } };
//     case "email":
//       return { ...state, ...{ email: action.value } };
//     case "password":
//       return { ...state, ...{ password: action.value } };
//     default:
//       throw new Error();
//   }
}

export default function Registration() {
  const [state, dispatch] = useReducer(changeValues, initialValue);

  function handleSubmit(e) {
    e.preventDefault();
    alert(`${state.name}, congratulation! Your form is submitted! `);
  }
  
  return (
    <section>
      <h3>Registration with useReducer</h3>
      <form action="" onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="name">
          Name
          <input
            type="text"
            name="name"
            value={state.name}
            onChange={(e) => {
              dispatch({
                type: "name",
                value: e.target.value
              });
            }}
          />
        </label>
        <label htmlFor="surname">
          Surname
          <input
            type="text"
            name="surname"
            value={state.surname}
            onChange={(e) => {
              dispatch({
                type: "surname",
                value: e.target.value
              });
            }}
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            type="email"
            name="email"
            value={state.email}
            onChange={(e) => {
              dispatch({
                type: "email",
                value: e.target.value
              });
            }}
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            type="password"
            name="password"
            value={state.password}
            onChange={(e) => {
              dispatch({
                type: "password",
                value: e.target.value
              });
            }}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}
