import React from "react";
import GetApi from "../../Component/GetApi";
import './Home.css'

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <h5>List Users</h5>
      <GetApi/>
    </div>
  );
};

export default Home;
