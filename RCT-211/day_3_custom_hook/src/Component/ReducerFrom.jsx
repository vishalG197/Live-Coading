import { useReducer } from "react";

const initialState = { email: "", password: "" };

const reducer = (state, action) => {
  switch (action.type) {
    case "EMAIL":
      return { ...state, email: action.payload };
    case "PASSWORD":
      return { ...state, password: action.payload };
    case "RESET":
      return { ...initialState };
    default:
      return state;
  }
};

export default function ReducerForm() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(state);
    dispatch({ type: "RESET" });
  };

  return (
    <div>
      <form action="" onSubmit={onSubmit}>
        <input
          type="email"
          placeholder="email"
          value={state.email}
          onChange={(e) => {
            dispatch({ type: "EMAIL", payload: e.target.value });
          }}
        />
        <input
          type="password"
          placeholder="password"
          value={state.password}
          onChange={(e) => {
            dispatch({ type: "PASSWORD", payload: e.target.value });
          }}
        />
        <input type="submit" />
      </form>
    </div>
  );
}
