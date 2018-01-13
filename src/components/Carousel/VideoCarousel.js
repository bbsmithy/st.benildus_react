import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import { React_Bootstrap_Carousel } from "react-bootstrap-carousel";
import Iframe from "react-iframe";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  onSelect = (active, direction) => {
    console.log(`active=${active} && direction=${direction}`);
  };
  slideNext = () => {
    this.slider.slideNext();
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
  render() {
    let { leftIcon, rightIcon } = this.state;
    return (
      <div className="container-fluid" style={{ padding: 0 }}>
        {/* <button
              type="button"
              className="btn btn-default"
              onClick={this._changeIcon}
            >
              Change Icon
            </button>
            <button
              type="button"
              className="btn btn-default"
              onClick={this.slidePrev}
            >
              Slider prev
            </button>
            <button
              type="button"
              className="btn btn-default"
              onClick={this.slideNext}
            >
              Slider next
            </button>
            <button
              type="button"
              className="btn btn-default"
              onClick={this.goToSlide}
            >
              Go to slide 4
            </button>
          </div> */}
        <React_Bootstrap_Carousel
          animation={true}
          slideshowSpeed={5000}
          leftIcon={leftIcon}
          rightIcon={rightIcon}
          onSelect={this.onSelect}
          ref={r => (this.slider = r)}
          className="carousel-fade"
        >
          <div>
            <Iframe
              url="https://www.youtube.com/embed/WdtIGmlmOdg?rel=0&amp;wmode=transparent"
              width="100%"
              height="300"
              id="myId"
              className="myClassname"
              display="initial"
              position="relative"
              allowFullScreen
            />
          </div>
          <div>
            <Iframe
              url="https://www.youtube.com/embed/Ew2pUx3cF_0?rel=0&amp;wmode=transparent"
              width="100%"
              height="300"
              id="myId"
              className="myClassname"
              position="relative"
              allowFullScreen
            />
          </div>
        </React_Bootstrap_Carousel>
      </div>
    );
  }
}

export default Carousel;
