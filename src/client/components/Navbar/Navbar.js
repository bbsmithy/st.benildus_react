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
            <h1
              className="logo col-md-5 col-sm-12"
              style={{ color: "white", fontWeight: "500" }}
            >
              <Link to={"/"}>
                <img
                  id="logo"
                  width="80px"
                  src={require("../../../assets/favicon.png")}
                  alt="Logo"
                />
              </Link>
              {"  "}St.Benildus College
            </h1>
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
                    <Link to={"/about/mission_statement"}>
                      Mission Statement
                    </Link>
                  </li>
                  <li>
                    <Link to={"/about/administration_staff"}>
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
                    <Link to={"/academia/transition_year"}>
                      Transistion Year
                    </Link>
                  </li>
                </Tab>

                <Tab title={"Extra Curricular"} active={this.props.active}>
                  <li>
                    <Link to={"/extra_curricular/sports"}>Sports</Link>
                  </li>
                  <li>
                    <Link to={"/extra_curricular/community_initiatives"}>
                      Community Initiatives
                    </Link>
                  </li>
                  <li>
                    <Link to={"/extra_curricular/gaisce"}>Gaisce</Link>
                  </li>
                  <li>
                    <Link to={"/extra_curricular/bank_of_ireland_program"}>
                      BOI Secondary Programme
                    </Link>
                  </li>
                  <li>
                    <Link to={"/extra_curricular/debating"}>Debating</Link>
                  </li>
                </Tab>
                <Tab title={"Run for Life"} active={this.props.active}>
                  <li>
                    <Link to={"/extra_curricular/sports"}>Sports</Link>
                  </li>
                  <li>
                    <Link to={"/extra_curricular/community_initiatives"}>
                      Community Initiatives
                    </Link>
                  </li>
                  <li>
                    <Link to={"/extra_curricular/gaisce"}>Gaisce</Link>
                  </li>
                  <li>
                    <Link to={"/extra_curricular/bank_of_ireland_program"}>
                      BOI Secondary Programme
                    </Link>
                  </li>
                  <li>
                    <Link to={"/extra_curricular/debating"}>Debating</Link>
                  </li>
                </Tab>
                <Tab title={"Parents"} active={this.props.active}>
                  <li>
                    <Link to={"/parents/book_list_and_uniform"}>
                      Book List and Uniform
                    </Link>
                  </li>
                  <li>
                    <Link to={"/parents/code_of_behaviour"}>
                      Code Of Behaviour
                    </Link>
                  </li>
                  <li>
                    <Link to={"/parents/disciplinary_procedure"}>
                      Disciplinary Procedure
                    </Link>
                  </li>
                  <li>
                    <Link to={"/parents/parents_association"}>
                      Parents Association
                    </Link>
                  </li>
                  <li>
                    <Link to={"/parents/policy_procedure"}>
                      Policy Procedure
                    </Link>
                  </li>
                </Tab>
                <Tab title={"Student Services"} active={this.props.active}>
                  <li>
                    <Link to={"/parents/book_list_and_uniform"}>
                      Book List and Uniform
                    </Link>
                  </li>
                  <li>
                    <Link to={"/parents/code_of_behaviour"}>
                      Code Of Behaviour
                    </Link>
                  </li>
                  <li>
                    <Link to={"/parents/disciplinary_procedure"}>
                      Disciplinary Procedure
                    </Link>
                  </li>
                  <li>
                    <Link to={"/parents/parents_association"}>
                      Parents Association
                    </Link>
                  </li>
                  <li>
                    <Link to={"/parents/policy_procedure"}>
                      Policy Procedure
                    </Link>
                  </li>
                </Tab>
                <Tab
                  title={"Enrolement"}
                  root={"/enrolement/"}
                  active={this.props.active}
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
