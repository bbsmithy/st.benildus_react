import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Page from "../../components/Page/Page";
import LightBox from "../../components/Gallery/Lightbox";

class GalleryFolder extends Component {
  constructor() {
    super();
    this.state = {
      title: ""
    };
  }
  componentWillMount() {
    switch (this.props.match.params.id) {
      case "archive": {
        console.log(this.props);
        this.setState({
          title: "St.Benildus Archive"
        });
      }
      default: {
        console.log(this.props);
      }
    }
  }
  render() {
    return (
      <div>
        <Navbar active={"Gallery"} />
        <Page title={this.state.title} fullWidth current={"Gallery"}>
          <LightBox folder={this.props.match.params.id} />
        </Page>
      </div>
    );
  }
}
export default GalleryFolder;
