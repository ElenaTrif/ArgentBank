// store.js

import { createStore } from 'redux';
import rootReducer from './reducers'; // Assurez-vous d'importer vos reducers correctement

const store = createStore(rootReducer); // Création du store avec le rootReducer

export default store;
