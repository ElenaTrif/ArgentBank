// UserPage.js
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserProfile } from "../actions/userActions";
import Account from '../components/Account';

function UserPage() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const token = useSelector((state) => state.user.token);

  console.log("Token:", token);

  useEffect(() => {
    if (token) {
      dispatch(fetchUserProfile());
    }
  }, [token, dispatch]);
  
  const fullName = user ? `${user.firstName} ${user.lastName}` : null;

  console.log("FullName:", fullName);

  return (
    <div>
      <main className="main bg-dark">
        <div className="header">
          <h1>
            Welcome back
            <br />
            {fullName}!
          </h1>
          <button className="edit-button">Edit Name</button>
        </div>
        {token && (
          <>
            <Account
              title="Argent Bank Checking"
              number="x8349"
              amount="$2,082.79"
              description="Available Balance"
            />
            <Account
              title="Argent Bank Savings"
              number="x6712"
              amount="$10,928.42"
              description="Available Balance"
            />
            <Account
              title="Argent Bank Credit Card"
              number="x8349"
              amount="$184.30"
              description="Current Balance"
            />
          </>
        )}
      </main>
    </div>
  ); 
}

export default UserPage;