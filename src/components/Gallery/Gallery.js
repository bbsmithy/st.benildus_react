import React, { Component } from "react";
import Lightbox from "react-images";
import fire from "../../fire";

export default class Sample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lightboxIsOpen: true
    };
  }

  getImages = path => {
    console.log("Getting Images");
    const docRef = fire
      .firestore()
      .collection("gallery")
      .doc("archive")
      .get()
      .then(doc => {
        if (doc.exists) {
          return doc.data();
        } else {
          console.log("Fail lol");
        }
      })
      .catch(err => {
        console.log(err);
      });
    return docRef;
  };

  componentWillMount() {
    // Create a reference to the file we want to download
    this.getImages().then(res => {
      console.log(res);
    });

    // Get the download URL
  }

  render() {
    return (
      <Lightbox
        images={[
          {
            src:
              "https://firebasestorage.googleapis.com/v0/b/benildus-college.appspot.com/o/archive%2FAR_ST_CG_LC_1974_001%20-%20Copy.jpg?alt=media&token=43584e57-d1d5-4a92-be5c-353e1e90bf23"
          }
        ]}
        isOpen={this.state.lightboxIsOpen}
        onClickPrev={this.gotoPrevious}
        onClickNext={this.gotoNext}
        onClose={this.closeLightbox}
      />
    );
  }
}
