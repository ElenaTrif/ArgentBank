import { combineReducers } from "redux";
import userReducer from "../slices/userSlice"; // Assurez-vous que le chemin est correct

// Combine tous les réducteurs en un seul réducteur racine
const rootReducer = combineReducers({
  user: userReducer, // Utilisation directe du réducteur de userSlice
  // Ajoutez d'autres reducers ici si nécessaire
});

export default rootReducer;
