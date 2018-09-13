import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import App from './App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class ReactRouter extends Component {
  render() {
    return (
      <Router forceRefresh={true}>
        <MuiThemeProvider>
          <App />
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default ReactRouter;
