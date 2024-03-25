export const login = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await fetch("http://localhost:3001/api/v1/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();

      dispatch({
        type: "LOGIN_SUCCESS",
        payload: { token: data.body.token, userName: email },
      }); // Ajoutez le nom de l'utilisateur à l'action
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE", payload: error.message });
    }
  };
};

export const logout = () => {
  return { type: "LOGOUT" };
};
