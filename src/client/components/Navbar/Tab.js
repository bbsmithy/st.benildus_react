import React, { Component } from "react";
import { Link } from "react-router-dom";

class Tab extends Component {
  constructor() {
    super();
    this.state = {
      style: "nav-item dropdown"
    };
  }

  render() {
    if (this.props.children) {
      if (this.props.active === this.props.title) {
        return (
          <li
            className={`${this.state.style} active`}
            onMouseLeave={() => {
              this.setState({ style: "nav-item dropdown" });
            }}
            onClick={() => {
              this.setState({ style: "nav-item dropdown open" });
            }}
            onMouseEnter={() => {
              this.setState({ style: "nav-item dropdown open" });
            }}
          >
            <a className="dropdown-toggle">
              {this.props.title} <i className="fa fa-angle-down" />
            </a>
            <ul className="dropdown-menu">{this.props.children}</ul>
          </li>
        );
      } else {
        return (
          <li
            className={this.state.style}
            onMouseLeave={() => {
              this.setState({ style: "nav-item dropdown" });
            }}
            onClick={() => {
              this.setState({ style: "nav-item dropdown open" });
            }}
            onMouseEnter={() => {
              this.setState({ style: "nav-item dropdown open" });
            }}
          >
            <a className="dropdown-toggle">
              {this.props.title} <i className="fa fa-angle-down" />
            </a>
            <ul className="dropdown-menu">{this.props.children}</ul>
          </li>
        );
      }
    } else {
      if (this.props.active === this.props.title) {
        return (
          <li className="nav-item active">
            <Link to={this.props.root}>{this.props.title}</Link>
          </li>
        );
      } else {
        return (
          <li className="nav-item">
            <Link to={this.props.root}>{this.props.title}</Link>
          </li>
        );
      }
    }
  }
}

export default Tab;
