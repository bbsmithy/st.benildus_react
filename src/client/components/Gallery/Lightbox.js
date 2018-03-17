import React, { Component } from "react";
import Lightbox from "react-images";
import { Link } from "react-router-dom";
import Storage from "../../../services/storage";
import Database from "../../../services/database";
import { css, StyleSheet } from "aphrodite/no-important";
import CircularProgress from "material-ui/CircularProgress";

export default class GalleryLightBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lightboxIsOpen: false,
      currentImage: 0,
      isFetchingCoverImages: true
    };
  }

  chunkify = (a, n, balanced) => {
    if (n < 2) return [a];

    const len = a.length;
    let out = [],
      i = 0,
      size;

    if (len % n === 0) {
      size = Math.floor(len / n);
      while (i < len) {
        out.push(a.slice(i, (i += size)));
      }
    } else if (balanced) {
      while (i < len) {
        size = Math.ceil((len - i) / n--);
        out.push(a.slice(i, (i += size)));
      }
    } else {
      n--;
      size = Math.floor(len / n);
      if (len % size === 0) size--;
      while (i < size * n) {
        out.push(a.slice(i, (i += size)));
      }
      out.push(a.slice(size * n));
    }

    return out;
  };

  openLightbox = (index, event) => {
    event.preventDefault();
    this.setState({
      currentImage: index,
      lightboxIsOpen: true
    });
  };
  closeLightbox = () => {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false
    });
  };
  gotoPrevious = () => {
    this.setState({
      currentImage: this.state.currentImage - 1
    });
  };
  gotoNext = () => {
    this.setState({
      currentImage: this.state.currentImage + 1
    });
  };
  gotoImage = index => {
    this.setState({
      currentImage: index
    });
  };
  handleClickImage = () => {
    if (this.state.currentImage === this.props.images.length - 1) return;

    this.gotoNext();
  };

  gotoIndex = index => {
    this.setState({
      currentImage: index
    });
  };
  renderGallery = () => {
    const { downloadUrls } = this.state;
    if (!downloadUrls) return;
    const imgColumns = this.chunkify(downloadUrls, 3, true);

    const gallery = imgColumns.map((imageArray, i) => {
      return (
        <div
          className={"col-md-4"}
          style={{
            padding: 0
          }}
        >
          {imageArray.map((obj, y) => {
            let img = new Image();
            img.src = obj.src;

            return (
              <div
                style={{
                  margin: 2
                }}
              >
                <a
                  href={obj.src}
                  className={[classes.thumbnail, classes.landscape]}
                  key={i}
                  onClick={e => this.openLightbox(obj.index, e)}
                >
                  <img
                    src={obj.src}
                    style={{ backgroundColor: "#f8f8f8" }}
                    className={"img-responsive"}
                  />
                </a>
              </div>
            );
          })}
        </div>
      );
    });

    return (
      <div className={"row"}>
        <div className={"col-md-9"}>{gallery}</div>

        <div className={"col-md-3"}>
          <ul class="list-group">
            <Link class="list-group-item active" to="/gallery/misc">
              Around Our School
            </Link>
            <Link class="list-group-item" to="/gallery/misc">
              Extra Curricular
            </Link>
            <Link class="list-group-item" to="/gallery/misc">
              In The Classroom
            </Link>
            <Link class="list-group-item" to="/gallery/misc">
              Music, Art & Culture
            </Link>
            <Link class="list-group-item" to="/gallery/misc">
              Outstanding Achievement
            </Link>
            <Link class="list-group-item" to="/gallery/misc">
              Run For Life
            </Link>
            <Link class="list-group-item" to="/gallery/misc">
              Sport
            </Link>
            <Link class="list-group-item" to="/gallery/misc">
              Transition Year
            </Link>
          </ul>
        </div>
      </div>
    );
  };

  getImages = async folder => {
    Database.requestGalleryImages(folder).then(images => {
      this.setState({
        isFetchingCoverImages: false,
        downloadUrls: images
      });
    });
  };

  componentWillMount() {
    const { folder } = this.props;
    this.getImages(folder);
    console.log(folder);
  }

  openLightbox(index, event) {
    event.preventDefault();
    this.setState({
      currentImage: index,
      lightboxIsOpen: true
    });
  }

  render = () => {
    if (this.state.isFetchingCoverImages) {
      return (
        <div style={{ marginLeft: "30%" }}>
          <CircularProgress color={"#003D7D"} size={80} thickness={5} />
        </div>
      );
    }
    return (
      <div>
        {this.renderGallery()}
        <Lightbox
          currentImage={this.state.currentImage}
          images={this.state.downloadUrls}
          showThumbnails={true}
          isOpen={this.state.lightboxIsOpen}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          onClose={this.closeLightbox}
          onClickThumbnail={this.gotoIndex}
        />
      </div>
    );
  };
}

const gutter = {
  small: 2,
  large: 4
};
const classes = StyleSheet.create({
  gallery: {
    marginRight: -gutter.small,
    overflow: "hidden",

    "@media (min-width: 500px)": {
      marginRight: -gutter.large
    }
  },

  // anchor
  thumbnail: {
    boxSizing: "border-box",
    display: "block",
    float: "left",
    lineHeight: 0,
    paddingRight: gutter.small,
    paddingBottom: gutter.small,
    overflow: "hidden",

    "@media (min-width: 500px)": {
      paddingRight: gutter.large,
      paddingBottom: gutter.large
    }
  },

  // orientation
  landscape: {
    width: "30%"
  },
  square: {
    paddingBottom: 0,
    width: "40%",

    "@media (min-width: 500px)": {
      paddingBottom: 0
    }
  },

  // actual <img />
  source: {
    border: 0,
    display: "block",
    overflow: "hidden",
    height: "200px",
    maxWidth: "100%",
    width: "auto"
  }
});