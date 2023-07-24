//Initial state for the form fields
export const initialState = {
  name: '',
  email: '',
  password: '',
  mobile:"",
};

// Reducer function to manage state updates
export const formReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE':
      return {
        ...state,
        [action.field]: action.value,
      };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
};