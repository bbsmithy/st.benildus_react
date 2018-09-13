import React, { Component } from 'react';
import Page from '../../components/Page/Page';
import { FormGroup, ControlLabel, FormControl, HelpBlock, Button } from 'react-bootstrap';
import '../../App.css';
import { signIn, getCurrentUser } from '../../../services/auth';
import { withRouter } from 'react-router-dom';

const LoginButton = withRouter(({ history, email, password }) => (
  <Button
    block
    bsSize="large"
    onClick={() => {
      // console.log(email, password);
      signIn(email, password)
        .then(() => {
          history.push('/gallery-manager');
        })
        .catch(e => console.log(e));
    }}
  >
    Login
  </Button>
));

export default class Admin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }
  componentWillMount() {
    getCurrentUser();
    console.log(this.state.email, this.state.password);
  }
  validateForm() {
    return;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  render() {
    return (
      <div className="Login">
        <form>
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl autoFocus type="email" value={this.state.email} onChange={this.handleChange} />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl value={this.state.password} onChange={this.handleChange} type="password" />
            <br />
            <LoginButton email={this.state.email} password={this.state.password} />
          </FormGroup>
        </form>
      </div>
    );
  }
}
