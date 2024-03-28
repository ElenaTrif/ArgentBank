// UserPage.js
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserProfile } from "../actions/userActions";
import Account from '../components/Account';
import Modal from "../components/Modal"; // Importer le composant Modal
import UsernameForm from "../components/UsernameForm"; // Importer le formulaire de modification du pseudo

function UserPage() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const token = useSelector((state) => state.user.token);
  const [showModal, setShowModal] = useState(false); // État pour afficher/masquer la modale

  console.log("Token:", token);

  useEffect(() => {
    if (token) {
      dispatch(fetchUserProfile());
    }
  }, [token, dispatch]);
  
  const fullName = user ? `${user.firstName} ${user.lastName}` : null;

  console.log("FullName:", fullName);

  const handleEditNameClick = () => {

    console.log("Edit Name button clicked");
    
    setShowModal(true); // Afficher la modale lorsque le bouton "Edit Name" est cliqué
  };

  const handleCloseModal = () => {
    setShowModal(false); // Fermer la modale
  };
  

  return (
    <div>
      <main className="main bg-dark">
        <div className="header">
          <h1>
            Welcome back
            <br />
            {fullName}!
          </h1>
          <button className="edit-button" onClick={handleEditNameClick}>Edit Name</button>
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
      {showModal && ( // Afficher la modale si showModal est vrai
        <Modal onClose={handleCloseModal}>
          <h2>Edit user info</h2>
          <UsernameForm firstName={user.firstName} lastName={user.lastName} userName={user.userName} onClose={handleCloseModal}/>
        </Modal>
      )}
    </div>
  ); 
}

export default UserPage;