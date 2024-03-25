import { combineReducers } from "redux";
import authReducer from "../reducers/authReducer"; // Remplacez userReducer par le nom de votre reducer

// Combine tous les réducteurs en un seul réducteur racine
const rootReducer = combineReducers({
  auth: authReducer, // Exemple de combinaison de reducers
  // Ajoutez d'autres reducers ici si nécessaire
});

export default rootReducer;
