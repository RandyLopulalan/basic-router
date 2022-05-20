import React from "react";
import GetApi from "../../Component/GetApi";
import './Home.css'

const Home = ({setUsername,setActive}) => {
  return (
    <div>
      <h1>Home</h1>
      <h5>List Users</h5>
      <GetApi setUsername={setUsername} setActive={setActive}/>
    </div>
  );
};

export default Home;
