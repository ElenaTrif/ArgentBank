import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateUser } from "../actions/userActions";
import { updateUsername } from "../slices/userSlice";

function UsernameForm({ firstName, lastName, userName, onClose }) {
  const [newUsername, setNewUsername] = useState(userName || "");
  const [successMessage, setSuccessMessage] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Form submitted with new username:", newUsername);

    try {
      await dispatch(updateUser(firstName, lastName, newUsername));
      await dispatch(updateUsername(newUsername)); // Mettre à jour le nom d'utilisateur dans le state Redux
      setSuccessMessage("New username saved successfully!");
      onClose(); // Ferme la modal après avoir enregistré avec succès
    } catch (error) {
      console.error("Failed to update username:", error);
    }
  };

  return (
    <form className="modal-container" onSubmit={handleSubmit}>
      {successMessage && <p>{successMessage}</p>}
      <div className="input-container">
        <label className="text-label-modal" htmlFor="newUsername">
          User name:
        </label>
        <input
          type="text"
          id="newUsername"
          value={newUsername}
          onChange={(e) => setNewUsername(e.target.value)}
        />
      </div>
      <div className="input-container">
        <label className="text-label-modal" htmlFor="newUsername">
          First Name:
        </label>
        <input type="text" id="newFirstName" value={firstName || ""} disabled />
      </div>
      <div className="input-container">
        <label className="text-label-modal" htmlFor="newUsername">
          Last Name:
        </label>
        <input type="text" id="newLastName" value={lastName || ""} disabled />
      </div>
      <div className="btn-modal-container">
        <button className="btn-modal" type="submit">
          Save
        </button>
        <button className="btn-modal" type="button" onClick={onClose}>
          Cancel
        </button>
      </div>
    </form>
  );
}

export default UsernameForm;
