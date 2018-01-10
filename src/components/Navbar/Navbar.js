import React, { Component } from "react";
import Tab from "./Tab";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div>
        <header className="header">
          <div className="header-main container">
            <h1 className="logo col-md-4 col-sm-4">
              <Link to={"/"}>
                <img
                  id="logo"
                  width="200px"
                  src={
                    "http://www.stbenilduscollege.com/wp-content/themes/stbenildus/img/fullheader.png"
                  }
                  alt="Logo"
                />
              </Link>
            </h1>
            <div className="info col-md-8 col-sm-8">
              <ul className="menu-top navbar-right hidden-xs">
                <li className="divider">
                  <Link to={"/"}>Home</Link>
                </li>
                <li className="divider">
                  <a href="faq.html">FAQ</a>
                </li>
                <li>
                  <Link to={"/contact"} style={{ color: "white" }}>
                    Contact
                  </Link>
                </li>
              </ul>
              <br />
              <div className="contact pull-right">
                <p className="phone" style={{ color: "white" }}>
                  <i className="fa fa-phone" />Call us today 0800 123 4567
                </p>
                <p className="email">
                  <i className="fa fa-envelope" />
                  <p style={{ color: "white" }}>enquires@website.com</p>
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
                <Tab title={"Home"} active={this.props.active} />
                <Tab title={"About"} active={this.props.active}>
                  <li>
                    <Link to={"/about/mission_statement"}>
                      Mission Statement
                    </Link>
                  </li>
                  <li>
                    <Link to={"/about/administration_staff"}>
                      Administration & Staff
                    </Link>
                  </li>
                  <li>
                    <a href="#">Principals Welcome</a>
                  </li>
                </Tab>
                <Tab title={"Academia"} active={this.props.active}>
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

                <Tab title={"Extra Curricular"} active={this.props.active}>
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
                <Tab title={"Gallery"} active={this.props.active} />
                <Tab title={"Parents"} active={this.props.active} />
                <Tab title={"Contact"} active={this.props.active} />
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
