// SignInForm.js
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/authActions";
import { fetchUserProfile } from "../actions/userActions";

function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const error = useSelector((state) => state.user.error);
  const token = useSelector((state) => state.user.token);


  // Effect hook pour effectuer la redirection lorsque le token est mis à jour
  useEffect(() => {
    const fetchData = async () => {
      if (token) {
        // Appeler la fonction fetchUserProfile après une connexion réussie
        await dispatch(fetchUserProfile());
        window.location.href = "/user"; // Redirection vers la page de l'utilisateur
      }
    };
    fetchData();
  }, [token, dispatch]); // Ajouter dispatch comme dépendance

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    dispatch(login(email, password));
  };

  return (
    <section className="sign-in-content">
      <i className="fa fa-user-circle"></i>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            autoComplete="current-password"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="input-remember">
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <button type="submit" className="sign-in-button">
          Sign In
        </button>
        {error && <div className="error-message">Incorrect email or password.</div>}
      </form>
    </section>
  );
}

export default SignInForm;
