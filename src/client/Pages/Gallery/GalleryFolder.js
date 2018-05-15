import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Page from "../../components/Page/Page";
import LightBox from "../../components/Gallery/Lightbox";

class GalleryFolder extends Component {
  _getTitle = () => {
    switch (this.props.match.params.id) {
      case "around-our-school": {
        return "Around Our School";
      }
      case "benildus-college-archive": {
        return "St.Benildus Archive";
      }
      case "extra-curricular": {
        return "Extra Curricular";
      }
      case "in-the-classroom": {
        return "In the Classroom";
      }
      case "in-the-classroom": {
        return "In the Classroom";
      }
      case "music-art-culture": {
        return "Music, Art and Culture";
      }
      case "outstanding-achievement": {
        return "Outstanding Achievements";
      }
      case "run-for-life": {
        return "Run for Life";
      }
      case "sports": {
        return "Sports";
      }
      case "transition-year": {
        return "Transition Year";
      }
      default: {
        return "Gallery";
      }
    }
  };
  render() {
    const title = this._getTitle();

    return (
      <div>
        <Navbar active={"Gallery"} />
        <Page title={title} fullWidth current={"Gallery"}>
          <LightBox folder={this.props.match.params.id} />
        </Page>
      </div>
    );
  }
}
export default GalleryFolder;
