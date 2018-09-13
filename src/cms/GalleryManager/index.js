import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export const GalleryManager = () => (
  <MuiThemeProvider>
    <App />
  </MuiThemeProvider>
);

// ReactDOM.render(<MuiApp />, document.getElementById("root"));
// registerServiceWorker();
