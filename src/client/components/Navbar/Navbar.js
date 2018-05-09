import React, { Component } from "react";
import Tab from "./Tab";
import { Link } from "react-router-dom";

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      responsiveNavbarStyle: "navbar-collapse collapse"
    };
  }
  render() {
    return (
      <div>
        <header className="header">
          <div className="header-main container">
            <div className="logo col-md-5 col-sm-12">
              <Link to={"/"}>
                <img
                  id="logo"
                  width="200px"
                  src={require("../../../assets/fullheader.png")}
                  alt="Logo"
                />
              </Link>
            </div>
            <div className="info col-md-7 col-sm-8">
              <ul className="menu-top navbar-right hidden-xs">
                <li className="divider">
                  <Link to={"/"}>Home</Link>
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
                  <i className="fa fa-phone" />Call us today 01 2986539
                </p>
                <p className="email" style={{ color: "white" }}>
                  <i className="fa fa-envelope" />
                  stbenildusoffice@stbenilduscollege.com
                </p>
              </div>
            </div>
          </div>
        </header>

        <nav className="main-nav" role="navigation">
          <div className="container">
            <div
              className="navbar-header"
              onClick={() => {
                if (this.state.collapsed) {
                  this.setState({
                    responsiveNavbarStyle: "navbar-collapse collapse",
                    collapsed: false
                  });
                } else {
                  this.setState({
                    responsiveNavbarStyle: "navbar-collapse collapse in",
                    collapsed: true
                  });
                }
              }}
            >
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
            <div
              className={this.state.responsiveNavbarStyle}
              id="navbar-collapse"
            >
              <ul className="nav navbar-nav">
                <Tab title={"Home"} root={"/"} active={this.props.active} />
                <Tab title={"About"} active={this.props.active}>
                  <li>
                    <Link to={"/about"}>About Us</Link>
                  </li>
                  <li>
                    <Link to={"/about/mission-statement"}>
                      Mission Statement
                    </Link>
                  </li>
                  <li>
                    <Link to={"/about/facilities"}>Facilities</Link>
                  </li>
                  <li>
                    <Link to={"/about/facilities"}>Principals Welcome</Link>
                  </li>
                  <li>
                    <Link to={"/about/administration-staff"}>
                      Administration & Staff
                    </Link>
                  </li>
                </Tab>
                <Tab title={"Academia"} active={this.props.active}>
                  <li>
                    <Link to={"/academia/core"}>Core Subjects</Link>
                  </li>
                  <li>
                    <Link to={"/academia/sciences"}>Sciences</Link>
                  </li>
                  <li>
                    <Link to={"/academia/languages"}>Languages</Link>
                  </li>
                  <li>
                    <Link to={"/academia/technology"}>Technology</Link>
                  </li>
                  <li>
                    <Link to={"/academia/humanities"}>Humanities</Link>
                  </li>
                  <li>
                    <Link to={"/academia/business"}>Business</Link>
                  </li>
                  <li>
                    <Link to={"/academia/transition-year"}>
                      Transistion Year
                    </Link>
                  </li>
                </Tab>

                <Tab title={"Extra Curricular"} active={this.props.active}>
                  <li>
                    <Link to={"/extra-curricular/sports"}>Sports</Link>
                  </li>
                  <li>
                    <Link to={"/extra-curricular/community-initiatives"}>
                      Community Initiatives
                    </Link>
                  </li>
                  <li>
                    <Link to={"/extra-curricular/gaisce"}>Gaisce</Link>
                  </li>
                  <li>
                    <Link to={"/extra-curricular/bank-of-ireland-program"}>
                      BOI Secondary Programme
                    </Link>
                  </li>
                  <li>
                    <Link to={"/extra-curricular/debating"}>Debating</Link>
                  </li>
                </Tab>
                <Tab title={"Parents"} active={this.props.active}>
                  <li>
                    <Link to={"/parents/book-list-and-uniform"}>
                      Book List and Uniform
                    </Link>
                  </li>
                  <li>
                    <Link to={"/parents/code-of-behaviour"}>
                      Code Of Behaviour
                    </Link>
                  </li>
                  <li>
                    <Link to={"/parents/disciplinary-procedure"}>
                      Disciplinary Procedure
                    </Link>
                  </li>
                  <li>
                    <Link to={"/parents/parents-association"}>
                      Parents Association
                    </Link>
                  </li>
                  <li>
                    <Link to={"/parents/policy-procedure"}>
                      Policy Procedure
                    </Link>
                  </li>
                </Tab>
                <Tab title={"Student Services"} active={this.props.active}>
                  <li>
                    <Link to={"/student-services/guidance-services/"}>
                      Guidance Services
                    </Link>
                  </li>
                  <li>
                    <Link to={"/student-services/student-council/"}>
                      Student Council
                    </Link>
                  </li>
                  <li>
                    <Link to={"/student-services/study-tips-services/"}>
                      Study Tips & Services
                    </Link>
                  </li>
                </Tab>
                <Tab
                  title={"Enrolement"}
                  root={"/enrolement/"}
                  active={this.props.active}
                />
                <Tab
                  title={"Run For Life"}
                  active={this.props.active}
                  root={"/run-for-life"}
                />
                <Tab
                  title={"Gallery"}
                  root={"/gallery"}
                  active={this.props.active}
                />

                <Tab
                  title={"Contact"}
                  root={"/contact"}
                  active={this.props.active}
                />
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
