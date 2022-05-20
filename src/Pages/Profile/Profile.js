import { useNavigate, useParams } from "react-router-dom";

const Profile = ({ username, setActive }) => {
  const navigate = useNavigate();

  let { id } = useParams();

  return (
    <div>
      <h1>Profile</h1>
      this is profile page for {username}
      <button
        onClick={() => {
          navigate(`/about/${id}`,
            setActive((prev) => (prev = "about"))
          );
        }}
      >
        Go to about page
      </button>
    </div>
  );
};

export default Profile;
