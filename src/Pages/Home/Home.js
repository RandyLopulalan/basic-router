import React from "react";
import GetApi from "../../Component/GetApi";
import './Home.css'

const Home = ({setUsername}) => {
  return (
    <div>
      <h1>Home</h1>
      <h5>List Users</h5>
      <GetApi setUsername={setUsername}/>
    </div>
  );
};

export default Home;
