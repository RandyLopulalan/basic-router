import React from "react";
import Nav from "../Nav/Nav";
import "./Header.css"

const Header = ({active,setActive}) => {
  return (
    <header>
      Header 
      <Nav active={active} setActive={setActive}/>
    </header>
  );
};

export default Header;
