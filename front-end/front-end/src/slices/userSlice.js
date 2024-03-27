import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: sessionStorage.getItem('token') || null, // Utilise sessionStorage pour récupérer le token lors de l'initialisation
  user: JSON.parse(sessionStorage.getItem('user')) || null, // Récupérer les données utilisateur depuis le sessionStorage
  error: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      sessionStorage.setItem('token', action.payload); // Stocke le token dans sessionStorage
    },
    setUser: (state, action) => {
      state.user = action.payload;
      sessionStorage.setItem('user', JSON.stringify(action.payload)); // Stocker les données utilisateur dans le sessionStorage
    },
    removeToken: state => {
      state.token = null;
      state.user = null;
      sessionStorage.removeItem('token'); // Supprime le token de sessionStorage lors de la déconnexion
    },    
    loginSuccess: (state, action) => {
      state.token = action.payload.token;
      state.error = null;
      sessionStorage.setItem('token', action.payload.token); // Stocke le token dans sessionStorage lors de la connexion réussie
    },
    loginFailure: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setToken, setUser, removeToken,  loginSuccess, loginFailure } = userSlice.actions;

export default userSlice.reducer;
