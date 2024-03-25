const initialState = {
  token: null,
  userName: null, // Ajoutez une nouvelle propriété pour stocker le nom de l'utilisateur
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        token: action.payload.token,
        userName: action.payload.userName, // Stockez le nom de l'utilisateur dans le state
        error: null,
      };
    case "LOGIN_FAILURE":
      return {
        ...state,
        error: action.payload,
      };
    case "LOGOUT":
      return initialState;
    default:
      return state;
  }
};

export default authReducer;
