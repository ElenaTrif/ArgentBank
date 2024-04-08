// userActions.js
import { setToken, loginFailure, setUser } from "../slices/userSlice";

export const fetchUserProfile = () => {
  return async (dispatch, getState) => {
    try {
      const { token } = getState().user;

      // Mettre à jour le token dans le store Redux avant de faire la requête
      dispatch(setToken(token));

      const response = await fetch(
        "http://localhost:3001/api/v1/user/profile",
        {
          method: "POST", // Utilisez la méthode POST pour récupérer les données de profil
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();

      console.log("Data received from API:", data);

      if (response.ok) {
        dispatch(setUser(data.body)); // Mettre à jour le token dans le state Redux
      } else {
        console.error("Error fetching user profile:", data.message);
        dispatch(loginFailure(data.message)); // Gérez l'échec de la récupération des données de profil
      }
    } catch (error) {
      console.error("Error fetching user profile:", error);
      dispatch(loginFailure(error.message)); // Gérez les erreurs de requête
    }
  };
};

export const updateUser = (firstName, lastName, newUsername) => {
  return async (dispatch, getState) => {
    try {
      const { token } = getState().user;

      const userData = {
        firstName: firstName,
        lastName: lastName,
        userName: newUsername,
      };

      const response = await fetch(
        "http://localhost:3001/api/v1/user/profile",
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        }
      );
      const data = await response.json();

      if (response.ok) {
        dispatch(setUser(data.body)); // Mettre à jour les données utilisateur dans le store Redux
      } else {
        console.error("Failed to update username:", data.message);
      }
    } catch (error) {
      console.error("Error updating username:", error);
    }
  };
};
