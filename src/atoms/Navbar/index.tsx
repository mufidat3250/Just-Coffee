import React, { useState } from "react";
import { FaMugHot , FaBars , FaTimes} from "react-icons/fa";
import Button from "../Button";
import "./NavBar.scss";
const NavBar = () => {
    const [nav, setNav] = useState(false)
    const tabs = ['HOME', 'ABOUT','MENU','REVIEW', 'BOOK']
  return (
    <div className="navWrapper">
        <FaBars className="menu" onClick={()=>setNav(!nav)}/>
      <a href="" className="logo-link">
        {" "}
        <p>Coffee</p> <FaMugHot className="logo" />
      </a>
      <div className="nav-tabs">
        <a href="">HOME</a>
        <a href="#">ABOUT</a>
        <a href="#">MENU</a>
        <a href="#">BOOK</a>
      </div>
      <div className={`nav-tabs mobile duration-500 transition-all  ${nav ? 'left-[0px]':'left-[-150%]'}`}>
       {
        tabs.map((tab, index)=>  <a href="" key={index}>{tab}</a>)
       }
        
      </div>
      <Button title='Book a Coffee'/>
    </div>
  );
};

export default NavBar;
