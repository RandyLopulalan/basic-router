import React, { useState } from "react";

const Home = () => {
  const [count ,setCount] = useState(0)
  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => setCount(prev => prev + 1)}>+</button>
      {count}
      <button onClick={() => setCount(prev => prev - 1)}>-</button>
    </div>
  );
};

export default Home;
