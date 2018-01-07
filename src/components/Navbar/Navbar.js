import React, { Component } from "react";
import Tab from "./Tab";

class Navbar extends Component {
  render() {
    return (
      <div>
        <header className="header">
          <div className="header-main container">
            <h1 className="logo col-md-4 col-sm-4">
              <a href="index.html">
                <img
                  id="logo"
                  width="225px"
                  src={
                    "http://www.stbenilduscollege.com/wp-content/themes/stbenildus/img/fullheader.png"
                  }
                  alt="Logo"
                />
              </a>
            </h1>
            <div className="info col-md-8 col-sm-8">
              <ul className="menu-top navbar-right hidden-xs">
                <li className="divider">
                  <a href="index.html">Home</a>
                </li>
                <li className="divider">
                  <a href="faq.html">FAQ</a>
                </li>
                <li>
                  <a style={{ color: "white" }} href="contact.html">
                    Contact
                  </a>
                </li>
              </ul>
              <br />
              <div className="contact pull-right">
                <p className="phone" style={{ color: "white" }}>
                  <i className="fa fa-phone" />Call us today 0800 123 4567
                </p>
                <p className="email">
                  <i className="fa fa-envelope" />
                  <a href="#" style={{ color: "white" }}>
                    enquires@website.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </header>

        <nav className="main-nav" role="navigation">
          <div className="container">
            <div className="navbar-header">
              <button
                className="navbar-toggle"
                type="button"
                data-toggle="collapse"
                data-target="#navbar-collapse"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
            </div>
            <div className="navbar-collapse collapse" id="navbar-collapse">
              <ul className="nav navbar-nav">
                <Tab title={"Home"} active />
                <Tab title={"About"}>
                  <li>
                    <a href="#">Facilities</a>
                  </li>
                  <li>
                    <a href="#">Mission Statement</a>
                  </li>
                  <li>
                    <a href="#">Administration & Staff</a>
                  </li>
                  <li>
                    <a href="#">Principals Welcome</a>
                  </li>
                </Tab>
                <Tab title={"Academia"}>
                  <li>
                    <a href="#">Core Subjects</a>
                  </li>
                  <li>
                    <a href="#">Sciences</a>
                  </li>
                  <li>
                    <a href="#">Languages</a>
                  </li>
                  <li>
                    <a href="#">Technology</a>
                  </li>
                  <li>
                    <a href="#">Humanities</a>
                  </li>
                  <li>
                    <a href="#">Business</a>
                  </li>
                  <li>
                    <a href="#">Transistion Year</a>
                  </li>
                </Tab>

                <Tab title={"Extra Curricular"}>
                  <li>
                    <a href="#">Sports</a>
                  </li>
                  <li>
                    <a href="#">Community Initiatives</a>
                  </li>
                  <li>
                    <a href="#">Gaisce</a>
                  </li>
                  <li>
                    <a href="#">BOI Secondary Programme</a>
                  </li>
                  <li>
                    <a href="#">Debating</a>
                  </li>
                </Tab>
                <Tab title={"Enrolement"}>
                  <li>
                    <a href="#">Enrolement Policy</a>
                  </li>
                  <li>
                    <a href="#">Enrolement Application Form</a>
                  </li>
                </Tab>
                <Tab title={"Gallery"} />
                <Tab title={"Parents"} />
                <Tab title={"Contact"} />
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
