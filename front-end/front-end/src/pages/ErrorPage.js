import React from "react";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="error-page">
      <h1>404</h1>
      <span className="error-text">
        Error ! The requested page could not be found !
      </span>
      <p className="homepage-return">
        <Link to="/">Return to homepage</Link>
      </p>
    </div>
  );
}

export default ErrorPage;
