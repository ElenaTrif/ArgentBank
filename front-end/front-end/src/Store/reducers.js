// reducers.js

import { combineReducers } from 'redux';
import userReducer from './userReducer'; // Remplacez userReducer par le nom de votre reducer

// Combine tous les réducteurs en un seul réducteur racine
const rootReducer = combineReducers({
  user: userReducer, // Exemple de combinaison de reducers
  // Ajoutez d'autres reducers ici si nécessaire
});

export default rootReducer;
