import React, { Component } from "react";

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
                <li className="active nav-item">
                  <a href="index.html">Home</a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    data-hover="dropdown"
                    data-delay="0"
                    data-close-others="false"
                    href="#"
                  >
                    About Us <i className="fa fa-angle-down" />
                  </a>
                  <ul className="dropdown-menu">
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
                    <li className="dropdown-submenu">
                      <a className="trigger" tabindex="-1" href="#">
                        Menu Levels <i className="fa fa-angle-right" />
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a tabindex="-1" href="#">
                            Submenu Level 2
                          </a>
                        </li>
                        <li className="dropdown-submenu">
                          <a className="trigger" href="#">
                            Submenu Level 2 <i className="fa fa-angle-right" />
                          </a>
                          <ul className="dropdown-menu">
                            <li>
                              <a href="#">Submenu Level 3</a>
                            </li>
                            <li>
                              <a href="#">Submenu Level 3</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">Submenu Level 2</a>
                        </li>
                        <li>
                          <a href="#">Submenu Level 2</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown open">
                  <a className="dropdown-toggle" href="#">
                    Academia <i className="fa fa-angle-down" />
                  </a>
                  <ul className="dropdown-menu">
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
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    data-hover="dropdown"
                    data-delay="0"
                    data-close-others="false"
                    href="#"
                  >
                    Extra Curricular <i className="fa fa-angle-down" />
                  </a>
                  <ul className="dropdown-menu">
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
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    data-hover="dropdown"
                    data-delay="0"
                    data-close-others="false"
                    href="#"
                  >
                    Enrolement <i className="fa fa-angle-down" />
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="#">Enrolement Policy</a>
                    </li>
                    <li>
                      <a href="#">Enrolement Application Form</a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a href="gallery.html">Gallery</a>
                </li>
                <li className="nav-item">
                  <a href="#">Parents</a>
                </li>
                <li className="nav-item">
                  <a href="contact.html">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
