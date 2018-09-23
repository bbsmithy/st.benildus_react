import React from "react";
import ReactDOM from "react-dom";
import App from "./ImageCompressor";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

export const ImageCompressor = props => (
  <MuiThemeProvider>
    <App {...props} />
  </MuiThemeProvider>
);

// ReactDOM.render(<MuiApp />, document.getElementById("root"));
// registerServiceWorker();
