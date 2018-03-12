import React from "react";
import ReactDOM from "react-dom";
import { React_Bootstrap_Carousel } from "react-bootstrap-carousel";

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
      <div style={{ padding: 0 }}>
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
            <img
              style={{ width: "100%" }}
              src="http://www.stbenilduscollege.com/wp-content/uploads/2016/02/SB_Front_Slide01_WEAREHAPPY.jpg"
            />
          </div>
          <div>
            <img
              style={{ width: "100%" }}
              src="http://www.stbenilduscollege.com/wp-content/uploads/2015/03/SB_Front_Slide02_WEARECHAMPIONS.jpg"
            />
          </div>
          <div>
            <img
              style={{ width: "100%" }}
              src="http://www.stbenilduscollege.com/wp-content/uploads/2015/03/SB_YS_2016_01a.jpg"
            />
          </div>

          <div>
            <img
              style={{ width: "100%" }}
              src="http://www.stbenilduscollege.com/wp-content/uploads/2015/03/SB_PPFootballLeinsterA_03a.jpg"
            />
          </div>
        </React_Bootstrap_Carousel>
      </div>
    );
  }
}

export default Carousel;
