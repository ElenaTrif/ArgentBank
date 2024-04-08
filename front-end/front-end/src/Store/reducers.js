import { combineReducers } from "redux";
import userReducer from "../slices/userSlice";

// Combine tous les réducteurs en un seul réducteur racine
const rootReducer = combineReducers({
  user: userReducer, // Utilisation directe du réducteur de userSlice
});

export default rootReducer;
