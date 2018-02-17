import React, { Component } from "react";
import Lightbox from "react-images";
import fire from "../../fire";

export default class Sample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lightboxIsOpen: false
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

  openLightbox(index, event) {
    event.preventDefault();
    this.setState({
      currentImage: index,
      lightboxIsOpen: true
    });
  }

  renderGallery() {
    const images = [
      "https://firebasestorage.googleapis.com/v0/b/benildus-college.appspot.com/o/archive%2FAR_ST_CG_LC_1974_001%20-%20Copy.jpg?alt=media&token=43584e57-d1d5-4a92-be5c-353e1e90bf23",
      "https://firebasestorage.googleapis.com/v0/b/benildus-college.appspot.com/o/archive%2FAR_ST_CG_LC_1974_001%20-%20Copy.jpg?alt=media&token=43584e57-d1d5-4a92-be5c-353e1e90bf23",
      "https://firebasestorage.googleapis.com/v0/b/benildus-college.appspot.com/o/archive%2FAR_ST_CG_LC_1974_001%20-%20Copy.jpg?alt=media&token=43584e57-d1d5-4a92-be5c-353e1e90bf23",
      "https://firebasestorage.googleapis.com/v0/b/benildus-college.appspot.com/o/archive%2FAR_ST_CG_LC_1974_001%20-%20Copy.jpg?alt=media&token=43584e57-d1d5-4a92-be5c-353e1e90bf23",
      "https://firebasestorage.googleapis.com/v0/b/benildus-college.appspot.com/o/archive%2FAR_ST_CG_LC_1974_001%20-%20Copy.jpg?alt=media&token=43584e57-d1d5-4a92-be5c-353e1e90bf23",
      "https://firebasestorage.googleapis.com/v0/b/benildus-college.appspot.com/o/archive%2FAR_ST_CG_LC_1974_001%20-%20Copy.jpg?alt=media&token=43584e57-d1d5-4a92-be5c-353e1e90bf23",
      "https://firebasestorage.googleapis.com/v0/b/benildus-college.appspot.com/o/archive%2FAR_ST_CG_LC_1974_001%20-%20Copy.jpg?alt=media&token=43584e57-d1d5-4a92-be5c-353e1e90bf23",
      "https://firebasestorage.googleapis.com/v0/b/benildus-college.appspot.com/o/archive%2FAR_ST_CG_LC_1974_001%20-%20Copy.jpg?alt=media&token=43584e57-d1d5-4a92-be5c-353e1e90bf23",
      "https://firebasestorage.googleapis.com/v0/b/benildus-college.appspot.com/o/archive%2FAR_ST_CG_LC_1974_001%20-%20Copy.jpg?alt=media&token=43584e57-d1d5-4a92-be5c-353e1e90bf23"
    ];

    if (!images) return;

    const gallery = images.map(i => {
      return (
        // <div className="col-md-6">
        //   <a href={i} key={i} onClick={e => this.openLightbox(i, e)}>
        //     <img style={{ width: "100%" }} src={i} />
        //   </a>
        // </div>
        <div className="col-md-4 col-sm-4 col-xs-12 text-center">
          <div class="album-cover">
            <a href="gallery-album.html">
              <img
                className="img-responsive"
                src="gs://benildus-college.appspot.com/misc/home_club_logo.png"
                alt=""
              />
            </a>
            <div className="desc">
              <h4>
                <small>
                  <a href="#">Album Lorem Ipsum</a>
                </small>
              </h4>
              <p>
                Integer ornare nisl tortor, sed condimentum metus pulvinar ut.
                Etiam ac pretium nunc. Donec porttitor erat non nibh
                pellentesque vehicula. Vestibulum tincidunt
              </p>
            </div>
          </div>
        </div>
      );
    });

    return <div>{gallery}</div>;
  }

  render() {
    return (
      <div>
        {this.renderGallery()}
        <Lightbox
          currentImage={this.state.currentImage}
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
      </div>
    );
  }
}

// import PropTypes from "prop-types";
// import React, { Component } from "react";
// import Lightbox from "react-images";

// class Gallery extends Component {
//   constructor() {
//     super();

//     this.state = {
//       lightboxIsOpen: false,
//       currentImage: 0
//     };

//     this.closeLightbox = this.closeLightbox.bind(this);
//     this.gotoNext = this.gotoNext.bind(this);
//     this.gotoPrevious = this.gotoPrevious.bind(this);
//     this.gotoImage = this.gotoImage.bind(this);
//     this.handleClickImage = this.handleClickImage.bind(this);
//     this.openLightbox = this.openLightbox.bind(this);
//   }
//   openLightbox(index, event) {
//     event.preventDefault();
//     this.setState({
//       currentImage: index,
//       lightboxIsOpen: true
//     });
//   }
//   closeLightbox() {
//     this.setState({
//       currentImage: 0,
//       lightboxIsOpen: false
//     });
//   }
//   gotoPrevious() {
//     this.setState({
//       currentImage: this.state.currentImage - 1
//     });
//   }
//   gotoNext() {
//     this.setState({
//       currentImage: this.state.currentImage + 1
//     });
//   }
//   gotoImage(index) {
//     this.setState({
//       currentImage: index
//     });
//   }
//   handleClickImage() {
//     if (this.state.currentImage === this.props.images.length - 1) return;

//     this.gotoNext();
//   }
//   renderGallery() {
//     const { images } = this.props;

//     if (!images) return;

//     const gallery = images.filter(i => i.useForDemo).map((obj, i) => {
//       return (
//         <a href={obj.src} key={i} onClick={e => this.openLightbox(i, e)}>
//           <img src={obj.thumbnail} />
//         </a>
//       );
//     });

//     return <div>{gallery}</div>;
//   }
//   render() {
//     return (
//       <div className="section">
//         {this.props.heading && <h2>{this.props.heading}</h2>}
//         {this.props.subheading && <p>{this.props.subheading}</p>}
//         {this.renderGallery()}
//         <Lightbox
//           currentImage={this.state.currentImage}
//           images={this.props.images}
//           isOpen={this.state.lightboxIsOpen}
//           onClickImage={this.handleClickImage}
//           onClickNext={this.gotoNext}
//           onClickPrev={this.gotoPrevious}
//           onClickThumbnail={this.gotoImage}
//           onClose={this.closeLightbox}
//           preventScroll={this.props.preventScroll}
//           showThumbnails={this.props.showThumbnails}
//           spinner={this.props.spinner}
//           spinnerColor={this.props.spinnerColor}
//           spinnerSize={this.props.spinnerSize}
//           theme={this.props.theme}
//         />
//       </div>
//     );
//   }
// }

// Gallery.displayName = "Gallery";
// Gallery.propTypes = {
//   heading: PropTypes.string,
//   images: PropTypes.array,
//   showThumbnails: PropTypes.bool,
//   subheading: PropTypes.string
// };

// const gutter = {
//   small: 2,
//   large: 4
// };
// // const classes = StyleSheet.create({
// //   gallery: {
// //     marginRight: -gutter.small,
// //     overflow: "hidden",

// //     "@media (min-width: 500px)": {
// //       marginRight: -gutter.large
// //     }
// //   },

// //   // anchor
// //   thumbnail: {
// //     boxSizing: "border-box",
// //     display: "block",
// //     float: "left",
// //     lineHeight: 0,
// //     paddingRight: gutter.small,
// //     paddingBottom: gutter.small,
// //     overflow: "hidden",

// //     "@media (min-width: 500px)": {
// //       paddingRight: gutter.large,
// //       paddingBottom: gutter.large
// //     }
// //   },

// //   // orientation
// //   landscape: {
// //     width: "30%"
// //   },
// //   square: {
// //     paddingBottom: 0,
// //     width: "40%",

// //     "@media (min-width: 500px)": {
// //       paddingBottom: 0
// //     }
// //   },

// //   // actual <img />
// //   source: {
// //     border: 0,
// //     display: "block",
// //     height: "auto",
// //     maxWidth: "100%",
// //     width: "auto"
// //   }
// // });

// export default Gallery;
