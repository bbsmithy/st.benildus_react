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
    let tempRowArray = [];
    let gridArray = [];
    for (var i = 0; i < folders.length; i += 3) {
      const row = [folders[i], folders[i + 1], folders[i + 2]];
      gridArray.push(row);
    }
    const gallery = gridArray.map(row => {
      const gridRow = row.map(folder => {
        return (
          <div className="col-md-4 col-sm-4 col-xs-12">
            <div class="album-cover">
              <a href={`gallery${folder.id}`}>
                <img className="img-responsive" src={folder.cover} />
              </a>
              <div className="desc">
                <h2>
                  <small>
                    <a href={`gallery${folder.id}`}>{folder.title}</a>
                  </small>
                </h2>
              </div>
            </div>
          </div>
        );
      });
      return (
        <div className="row" style={{ marginBottom: 20 }}>
          {gridRow}
        </div>
      );
    });
    return <div>{gallery}</div>;
  }

  render() {
    return <div>{this.renderFolders()}</div>;
  }
}
