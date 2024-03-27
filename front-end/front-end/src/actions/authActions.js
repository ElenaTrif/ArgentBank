import { loginSuccess, loginFailure, removeToken, setToken, setUser } from '../slices/userSlice';

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


      console.log("Login success:", data);

      if (response.ok) {
        dispatch(loginSuccess({ token: data.body.token, user: data.body.user }));
        dispatch(setToken(data.body.token)); // Mettre à jour le token dans le store Redux
        dispatch(setUser(data.body.user)); // Stockez les informations du profil dans le state Redux
      } else {
        dispatch(loginFailure(data.message));
      }
      
    } catch (error) {
      dispatch(loginFailure(error.message));
    }
  };
};

export const logout = () => {
  return (dispatch) => {

    console.log("Logging out"); 

    
    dispatch(removeToken()); // Supprimez le token utilisateur lors de la déconnexion
  };
};
