import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const Profile = () => {
  
  const navigate = useNavigate();

  ///profile/randy
  let { username } = useParams();
  return (
    <div>
      <h1>Profile</h1>
      this is profile page for {username}
      <button
        onClick={() => {
          navigate("/about");
        }}
      >
        Go to about page
      </button>
    </div>
  );
};

export default Profile;
