import React from "react";
import "./Navbar.css";
import Logo from "../../assets/logo.png";
import Off from "../../assets/Off.png";
import Button from "@mui/material/Button";
import LogoutIcon from "@mui/icons-material/Logout";

function Navbar() {
  return (
    <div className="navbar">
      <div classNameName="nav-left">
        <div className="nav-link-container">
          <div className="logo-container">
            <img className="logo-img" src={Logo} alt="logo" />
          </div>
          <ul className="nav-links">
            <li className="nav-link">Home</li>
            <li className="nav-link">Workout</li>
            <li className="nav-link">Learn</li>
            <li className="nav-link">Hub</li>
            <li className="nav-link">Activity</li>
            <li className="nav-link">Leaderboard</li>
            <li className="nav-link">Community</li>
            <li className="nav-link">FAQ</li>
          </ul>
        </div>
      </div>
      <div className="nav-right">
        <div className="nav-useroptions">
          <Button variant="outlined" endIcon={<LogoutIcon />} color="inherit">
            Logout
          </Button>

          {/* Custom Button */}
          {/* <button className="nav-button">
            <div className="button-icon">
              <img src="../../assets/icons/message.svg" />
            </div>
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
