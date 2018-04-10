import React from "react";
import ReactDOM from "react-dom";
import Router from "./client/Router";
import registerServiceWorker from "./client/registerServiceWorker";

ReactDOM.render(<Router/>, document.getElementById("root"));
registerServiceWorker();
