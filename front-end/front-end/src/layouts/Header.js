import React from "react";
import Logo from "../images/argentBankLogo.webp";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeToken } from "../slices/userSlice";
import { useNavigate } from "react-router-dom";

function Header() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token);
  const userName = useSelector((state) => state.user.user?.userName); // Utilisez le sélecteur pour extraire le nom d'utilisateur
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate("/user"); // Redirection vers la page de profil
  };

  const logout = () => {
    dispatch(removeToken());
  };

  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={Logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>

      {!token ? (
        <div>
          <Link className="main-nav-item" to="/sign-in">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        </div>
      ) : (
        <div>
          <span className="main-nav-item" onClick={handleProfileClick}>
            <i className="fa fa-user-circle"></i>
            {userName}
          </span>
          <Link className="main-nav-item" to="/" onClick={logout}>
            <i className="fa fa-sign-out"></i>
            Sign Out
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Header;
