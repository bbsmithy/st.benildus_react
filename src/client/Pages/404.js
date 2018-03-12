import React, { Component } from "react";
import Navbar from "../components/Navbar/Navbar";
import Page from "../components/Page/Page";
import Footer from "../components/Footer/Footer";
import Carousel from "../components/Carousel/Carousel";
import VideoCarousel from "../components/Carousel/VideoCarousel";
import { Link } from "react-router-dom";

import TwitterTimeline from "react-twitter-embedded-timeline";
import Iframe from "react-iframe";

class NoMatch extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Page title={"Page Not Found"} current={"Gallery"} />
      </div>
    );
  }
}
export default NoMatch;
