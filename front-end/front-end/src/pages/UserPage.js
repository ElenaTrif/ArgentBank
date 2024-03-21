import React from "react";

function UserPage() {
  return (
    <div>
      <main className="main bg-dark">
        <div className="header">
          <h1>
            Welcome back
            <br />
            Tony Jarvis!
          </h1>
          <button className="edit-button">Edit Name</button>
        </div>
        {/* Insert account components here */}
      </main>
    </div>
  );
}

export default UserPage;
