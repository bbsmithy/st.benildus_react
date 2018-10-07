import React, { Component } from "react";
import Lightbox from "react-images";
import { Link, Redirect } from "react-router-dom";
import Storage from "../../../services/storage";
import Database from "../../../services/database";
import { css, StyleSheet } from "aphrodite/no-important";
import CircularProgress from "material-ui/CircularProgress";
import Grid from "react-bootstrap/lib/Grid";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import { folders } from "./folders";
import ImageItem from "./ImageItem";
import FlatButton from "material-ui/FlatButton/FlatButton";

export default class GalleryLightBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lightboxIsOpen: false,
      currentImage: 0,
      isFetchingCoverImages: true,
      selectedImages: [],
      folders: []
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.folder !== prevProps.folder || this.props.imageCount !== prevProps.imageCount) {
      console.log("NEW FOLDER", this.props.folder)
      this.getImagesAndFolders(this.props.folder);
    }
  }


  componentWillMount() {
    const { folder } = this.props;
    this.getImagesAndFolders(folder);
  }

  getImagesAndFolders = folder => {
    
    Database.getFolder(folder).then((res)=>{
        const folderValue = res.val();
        console.log(folderValue)
        if(folderValue){
          this.setState({
            folders: folderValue.folders || []
          })
          if(folderValue.images){
            this.getImages(`${folder}/images`,false)
          }
          else{
            this.setState({
              downloadUrls: [],
              isFetchingCoverImages: false
            })
          }
        }
        if(this.props.onFolderChanged) this.props.onFolderChanged(folderValue)
    }).catch((err)=>{
      this.setState({
        isFetchingCoverImages: false,
        folderNotFound: true
      })
    });
      
  };

  getFolderCoverImages = async (folderValue) => {
    let coverImagePromises = [];
    Object.keys(folderValue.folders).forEach(folder => {
      if (folderValue.folders[folder].coverImage) {
        coverImagePromises.push(
          Storage.getDownloadUrl(folderValue.folders[folder].coverImage.src)
        );
      }
    });
    return Promise.all(coverImagePromises)
  }

  getImages = (folder, stillFetching) => {
    Database.requestGalleryImages(folder).then(images => {
      console.log()
      this.setState({
        downloadUrls: images,
        isFetchingCoverImages: stillFetching
      });
    });
  };


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

  onImageItemClicked = (obj, selected) => {
    console.log("ITEM CLICKED");
    if (this.props.editMode) {
      selected ? this.selectedImage(obj) : this.unselectedImage(obj);
    } else {
      this.openLightbox(obj.index);
    }
  };

  selectedImage = obj => {
    this.props.onImageSelected(obj);
  };

  unselectedImage = obj => {
    this.props.onImageUnselected(obj);
  };

  openLightbox(index) {
    console.log(index);
    this.setState({
      currentImage: index,
      lightboxIsOpen: true
    });
  }

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

  renderFolders = () => {
      return Object.keys(this.state.folders).map((key, i)=>{
        return  (
          <div className="button row" style={{margin: 10}} onClick={()=>{
            this.getImagesAndFolders(`${this.state.folders[key].folderPath}`)
          }}>
            <div style={{paddingVertical: 20,}} className="col-md-2 col-sm-12">
              <img
                src={
                  require('../../../assets/placeholder-image.png')
                }
                height={'100%'}
                style={{alignSelf: 'center', width: '100%'}}
              />
            </div>
            <div className="col-md-10 col-sm-12">
            <div style={{padding: 10, marginTop: 20}}>
                <a style={{ display: "inline-block" }}>
                  <h4>{this.state.folders[key].folderName}</h4>
                </a>
                <span
                  style={{ display: "inline-block" }}
                  className="glyphicon glyphicon-chevron-right pull-right d-sm-none"
                />
            </div>
                
            </div>  
          </div>
        )
      })
  }

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
              <ImageItem
                src={obj.src}
                object={obj}
                key={i}
                onClick={this.onImageItemClicked}
                editMode={this.props.editMode}
              />
            );
          })}
        </div>
      );
    });

    return (
      <div className={"row"}>
        <div className={this.props.showNavigation ? "col-md-9" : "col-md-12"}>
          {gallery}
        </div>

        {this.props.showNavigation && (
          <div className={"col-md-3"}>
            <ul class="list-group">
              {folders.map(folder => {
                const linkStyle =
                  `/${this.props.folder}` === folder.id
                    ? "list-group-item active"
                    : "list-group-item";
                return (
                  <a className={linkStyle} href={`/gallery${folder.id}`}>
                    {folder.title}
                  </a>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    );
  };

  renderLigthBox = () => {
    return (
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
    );
  };

  render = () => {
    if (this.state.isFetchingCoverImages && !this.props.hideLoading) {
      return (
        <div style={{ marginLeft: "30%" }}>
          <CircularProgress color={"#003D7D"} size={80} thickness={5} />
        </div>
      );
    }
    if(this.state.folderNotFound){
      return <Redirect to="/gallery"/>
    }
    return (
      <div>
        {this.state.folders && this.props.useFolder && this.renderFolders()}
        {this.state.downloadUrls && this.renderGallery()}
         {this.state.downloadUrls &&  this.renderLigthBox()}
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
