import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class ManagerHeader extends Component {
  render() {
    return (
      <header className="header">
        <div className="header-main container">
          <div className="logo col-md-6">
            <img
              id="logo"
              width="125px"
              src={require("../../assets/fullheader.png")}
              alt="Logo"
            />
          </div>
          <div className="col-md-5">
            <ul className="navbar-right" style={{ marginTop: 15 }}>
              <li
                className="divider"
                style={{ display: "inline-block", color: "white" }}
              >
                <Link to={"/"} style={{ color: "white", marginRight: 10 }}>
                  Home
                </Link>
              </li>
              <li style={{ display: "inline-block" }}>
                <Link
                  to={"/gallery-manager"}
                  style={{ color: "white", marginRight: 10 }}
                >
                  Gallery
                </Link>
              </li>
              <li style={{ display: "inline-block" }}>
                <Link to={"/archive-manager"} style={{ color: "white" }}>
                  Archive
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    );
  }
}
