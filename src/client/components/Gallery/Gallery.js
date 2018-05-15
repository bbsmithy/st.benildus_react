import React, { Component } from "react";
import Lightbox from "react-images";
import { Link } from "react-router-dom";
import { folders } from "./folders";

export default class Sample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lightboxIsOpen: false,
      coverImages: [],
      isFetchingCoverImages: true
    };
  }

  // getDownloadUrl(filePath) {
  //   return new Promise((resolve, reject) => {
  //     this.storage
  //       .ref(filePath)
  //       .getDownloadURL()
  //       .then(file => {
  //         resolve(file);
  //       })
  //       .catch(error => {
  //         reject(error.message);
  //       });
  //   });
  // }

  // getCoverImages() {
  //   const ref = this.database.ref("/archive");
  //   const downloads = [];
  //   ref.once("value", data => {
  //     for (let k in data.val()) {
  //       let downloadOp = this.getDownloadUrl(data.val()[k].filePath);
  //       downloads.push(downloadOp);
  //     }
  //   });
  //   const downloadOps = Promise.all(downloads);
  //   downloadOps
  //     .then(data => {
  //       this.setState({
  //         coverImages: data
  //       });
  //     })
  //     .catch(data => {
  //       console.log(data);
  //     });
  // }

  // componentWillMount() {
  //   this.getCoverImages();
  // }

  // openLightbox(index, event) {
  //   event.preventDefault();
  //   this.setState({
  //     currentImage: index,
  //     lightboxIsOpen: true
  //   });
  // }

  renderFolders() {
    if (!folders) return;

    const gallery = folders.map(folder => {
      return (
        <div className="col-md-4 col-sm-4 col-xs-12 text-center">
          <div class="album-cover">
            <Link to={`gallery${folder.id}`}>
              <img className="img-responsive" src={folder.cover} alt="" />
            </Link>
            <div className="desc">
              <h4>
                <small>
                  <a href={`gallery${folder.id}`}>{folder.title}</a>
                </small>
              </h4>
            </div>
          </div>
        </div>
      );
    });

    return <div>{gallery}</div>;
  }

  render() {
    return <div>{this.renderFolders()}</div>;
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
