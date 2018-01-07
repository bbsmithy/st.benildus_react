import React, { Component } from "react";

class Tab extends Component {
  constructor() {
    super();
    this.state = {
      style: "nav-item dropdown"
    };
  }

  render() {
    if (this.props.children) {
      return (
        <li
          className={this.state.style}
          onMouseLeave={() => {
            this.setState({ style: "nav-item dropdown" });
          }}
          onMouseEnter={() => {
            this.setState({ style: "nav-item dropdown open" });
          }}
        >
          <a className="dropdown-toggle" href="#">
            {this.props.title} <i className="fa fa-angle-down" />
          </a>
          <ul className="dropdown-menu">{this.props.children}</ul>
        </li>
      );
    } else {
      if (this.props.active) {
        return (
          <li className="nav-item active">
            <a href="index.html">{this.props.title}</a>
          </li>
        );
      } else {
        return (
          <li className="nav-item">
            <a href="index.html">{this.props.title}</a>
          </li>
        );
      }
    }
  }
}

export default Tab;
