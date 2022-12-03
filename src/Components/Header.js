import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import "./Style/Header.scss"
import { Data } from "./Data";

const Header = () => {

  const [open, setOpen] = useState(false)

  const showMenu = () => {
    setOpen(!open)
  }

  return (
    <div className="header">
      <nav>
        {/* LEFT_SIDE */}
        <div className="logo">
          <h1>Emim .</h1>
        </div>
        {/* LEFT_SIDE */}
        <ul className="ul-item">
          <li>
            <Link to="#">Home</Link>
          </li>
          <li>
            <Link to="#">About</Link>
          </li>
          <li>
            <Link to="#">Services</Link>
          </li>
          <li>
            <Link to="#">projects</Link>
          </li>
          <li>
            <Link to="#">Blog</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>

          <div className="hambruger-menu">
            <MenuIcon className="menu" onClick={showMenu}/>
          </div>
        </ul>

      </nav>

      <nav className={open ? 'slider active' : 'slider'}>
        <ul className="slider-ul" onClick={showMenu}>
        {Data.map((item,index)=>{
          return (
            <li key={index} className={item.className}>
              <Link to={item.path}>{item.text}</Link>

            </li>
          )
        })}

        </ul>

      </nav>
    </div>
  );
};

export default Header;
