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
                <Tab title={"Home"} root={"/"} active={this.props.active} />
                <Tab title={"About"} root={"/about"} active={this.props.active}>
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
                    <Link to={"/about/principals_welcome"}>
                      Principals Welcome
                    </Link>
                  </li>
                </Tab>
                <Tab
                  title={"Academia"}
                  root={"/academia/core"}
                  active={this.props.active}
                >
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

                <Tab
                  title={"Extra Curricular"}
                  root={"/extra_curricular/sports"}
                  active={this.props.active}
                >
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
                <Tab
                  title={"Enrolement"}
                  root={"/enrolement/enrolement_policy/"}
                  active={this.props.active}
                >
                  <li>
                    <Link to={"/enrolement/enrolement_policy/"}>
                      Enrolement Policy
                    </Link>
                  </li>
                  <li>
                    <Link to={"/enrolement/enrolement_form/"}>
                      Enrolement Application Form
                    </Link>
                  </li>
                </Tab>
                <Tab
                  title={"Parents"}
                  root={"/parents/book_list_and_uniform"}
                  active={this.props.active}
                >
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
