import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Page from "./components/Page/Page";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <p className="App-intro">
        <Page title={"Home"} current={'Home'}>
          <div>
            
          </div>
        </Page>
        </p>
      </div>
    );
  }
}

export default App;
