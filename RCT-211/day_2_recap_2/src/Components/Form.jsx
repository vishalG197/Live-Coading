
import React, { useReducer } from 'react';
import { formReducer, initialState } from '../utile/reducer';



const FormComponent = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleInputChange = (field, value) => {
    dispatch({
      type: 'CHANGE',
      field,
      value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here using the state values
    console.log(state);
    // Reset form fields
    dispatch({ type: 'RESET' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        value={state.name}
        onChange={(e) => handleInputChange('name', e.target.value)}
      />

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={state.email}
        onChange={(e) => handleInputChange('email', e.target.value)}
      />
<label htmlFor="mobile">MOBILE:</label>
      <input
        type="number"
        id="mobile"
        value={state.mobile}
        onChange={(e) => handleInputChange('mobile', e.target.value)}
      />

      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        value={state.password}
        onChange={(e) => handleInputChange('password', e.target.value)}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default FormComponent;



