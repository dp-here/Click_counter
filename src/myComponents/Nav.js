import React from "react";
import "../css/styles.css";
import { Link } from "react-router-dom";
import hack from "./hack.jpg"

export default function Nav(){

  return(
        <div className="navbar">
          <div className="logo">Jetstar Gaming&nbsp;
        <img src={hack} alt="logo" style={{height:"30px", width:"30px"}}></img>
          </div>
           <ul className="nav-links">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/contacts">Contacts</Link>
           </ul>
        </div>
  );

}