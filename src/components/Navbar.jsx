import React from 'react';
import "./styles/Navbar.css";
import logo from "../assets/bitla.png";
import { IoNotificationsSharp } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

function Navbar() {
  return (
      <div className="navbar">
          <div className="navbar__logo">
              <img src={logo} alt="bitla logo" />
          </div>
          <div className="navbar__button">
              <button>Recharge</button>
          </div>
          <div className="navbar__balance">
              <span>Acc balance   <b>&#8377; 99204.10</b></span>
          </div>
          <div className="navbar__list">
              <ul>
                  <li>Single sign-on</li>
                  <li>Search Booking</li>
                  <li>Report</li>
                  <li>Users</li>
              </ul>
          </div>
          <div className="navbar__notify">
              <IoNotificationsSharp size={23} color="gray"/>
              <div className="navbar__notify__number">10</div>
          </div>
          <div className="navbar__user__profile">
              <CgProfile size={30} color="black" />
              <div><span>Gourav Ojha</span></div>
          </div>
      </div>
  );
}

export default Navbar;
