import React, { Component } from "react";
import Page from "../../components/Page/Page";
import {
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock,
  Button
} from "react-bootstrap";
import "../../App.css";
import { signIn, getCurrentUser } from "../../../services/auth";

export default class Admin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }
  componentWillMount() {
    getCurrentUser();
    console.log(this.state.email, this.state.password);
  }
  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleSubmit = event => {
    signIn(this.state.email, this.state.password);
  };

  render() {
    return (
      <div className="Login">
        <form>
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            onClick={this.handleSubmit}
          >
            Login
          </Button>
        </form>
      </div>
    );
  }
}
