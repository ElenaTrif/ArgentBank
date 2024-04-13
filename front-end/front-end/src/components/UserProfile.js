import React from "react";
import { useSelector } from "react-redux";
import UsernameForm from "./UsernameForm";

function UserProfile() {
  const user = useSelector((state) => state.user.user);

  return (
    <div className="modal-container">
      {user && (
        <>
          <p>First Name: {user.firstName}</p>
          <p>Last Name: {user.lastName}</p>
          <p>Current Username: {user.userName}</p>
          <UsernameForm initialUsername={user.userName} />
        </>
      )}
    </div>
  );
}

export default UserProfile;
