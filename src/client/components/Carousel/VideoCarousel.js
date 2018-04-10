import React from "react";
import ReactDOM from "react-dom";

import { React_Bootstrap_Carousel } from "react-bootstrap-carousel";
import Iframe from "react-iframe";

import ImageGallery from "react-image-gallery";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [
        "https://www.youtube.com/embed/Ew2pUx3cF_0?rel=0&amp;wmode=transparent",
        "https://www.youtube.com/embed/WdtIGmlmOdg?rel=0&amp;wmode=transparent"
      ],
      currentVideo: 0
    };
  }
  onSelect = (active, direction) => {
    console.log(`active=${active} && direction=${direction}`);
  };
  slideNext = () => {
    this.setState();
  };
  slidePrev = () => {
    this.slider.slidePrev();
  };
  goToSlide = () => {
    this.slider.goToSlide(4);
  };
  _changeIcon = () => {
    let { leftIcon, rightIcon } = this.state;
    if (leftIcon && rightIcon) {
      this.setState({
        leftIcon: undefined,
        rightIcon: undefined
      });
    } else {
      this.setState({
        leftIcon: <span className="glyphicon glyphicon-glass" />,
        rightIcon: <span className="glyphicon glyphicon-music" />
      });
    }
  };

  renderVideo = url => {
    return (
      <Iframe
        url={url}
        width="100%"
        height="200"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"
        allowFullScreen
      />
    );
  };
  render() {
    let { leftIcon, rightIcon } = this.state;
    return (
      <div className="container-fluid" style={{ padding: 0 }}>
        <div>
          {this.renderVideo(this.state.videos[this.state.currentVideo])}
        </div>
        <div class="carousel-controls">
          <a
            class="prev"
            onClick={() => {
              if (this.state.videos[this.state.currentVideo - 1]) {
                this.setState({ currentVideo: this.state.currentVideo - 1 });
              } else {
                const last = this.state.videos.length - 1;
                this.setState({ currentVideo: last });
              }
            }}
            data-slide="prev"
          >
            <i class="fa fa-caret-left" />
          </a>
          <a
            class="next"
            onClick={() => {
              if (this.state.videos[this.state.currentVideo + 1]) {
                this.setState({ currentVideo: this.state.currentVideo + 1 });
              } else {
                this.setState({ currentVideo: 0 });
              }
            }}
            data-slide="next"
          >
            <i class="fa fa-caret-right" />
          </a>
        </div>
      </div>
    );
  }
}

export default Carousel;
