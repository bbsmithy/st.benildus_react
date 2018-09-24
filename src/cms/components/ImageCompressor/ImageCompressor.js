import React, { Component } from "react";
import "./App.css";
import fbICU from "./FirebaseICU";
import fire from "../../../services/fire";
import Paper from "material-ui/Paper";
import SelectField from "material-ui/SelectField";
import TextField from "material-ui/TextField";
import Button from "material-ui/FlatButton";
import MenuItem from "material-ui/MenuItem";
import Snackbar from "material-ui/Snackbar";
import Grid from "react-bootstrap/lib/Grid";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import { Link } from "react-router-dom";
import GalleryLightBox from "../../../client/components/Gallery/Lightbox";
import Database from "../../../services/database";
import Storage from "../../../services/storage";
import ManagerHeader from "../../components/ManagerHeader";

const FirebaseICU = new fbICU(fire.storage());

const FolderPicker = props => {
  return (
    <SelectField
      hintText="Select Folder"
      value={props.folder}
      onChange={props.handleChange}
    >
      <MenuItem value={"around-our-school"} primaryText="Around Our School" />
      <MenuItem
        value={"benildus-college-archive"}
        primaryText="St.Benildus College Archive"
      />
      <MenuItem value={"extra-curricular"} primaryText="Extra Curricular" />
      <MenuItem value={"in-the-classroom"} primaryText="In the Classroom" />
      <MenuItem
        value={"music-art-culture"}
        primaryText="Music, Art & Culture"
      />
      <MenuItem
        value={"outstanding-achievement"}
        primaryText="Outstanding Achievements"
      />
      <MenuItem value={"run-for-life"} primaryText="Run for Life" />
      <MenuItem value={"sports"} primaryText="Sports" />
      <MenuItem value={"transition-year"} primaryText="Transition Year" />
    </SelectField>
  );
};

const ImageRow = props => {
  return (
    <Paper class="imageRow">
      <Row style={{ padding: 15 }}>
        <Col md={6}>
          <img style={{ width: "100%" }} src={props.image} />
        </Col>
        <Col md={6}>
          <p>Size: {props.imageSize}</p>
        </Col>
      </Row>
    </Paper>
  );
};

const ImageList = props => {
  const { images } = props;

  const listImages = images.map(image => {
    console.log(image);
    return (
      <ImageRow image={image.dataUrl} imageSize={image.imgFileSizeFormatted} />
    );
  });
  return <div>{listImages}</div>;
};

const CompressedImageList = props => {
  const { images } = props;

  const listImages = images.map(image => {
    const { imageDataUrl } = image;
    let imageSize = FirebaseICU.getImageSize(imageDataUrl);
    return (
      <ImageRow
        image={imageDataUrl}
        imageSize={imageSize.imgFileSizeFormatted}
      />
    );
  });
  return <div>{listImages}</div>;
};

export default class ImageCompressor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imagesToRender: [],
      compressedImagesToRender: [],
      allowCompression: true,
      uploadFolder: props.uploadPath
    };

    console.log(props.singleImage);
  }

  _handleUploadFolderChange = (event, index, value) => {
    this.setState({
      uploadFolder: value
    });
  };

  _handleCompressImages() {
    let newCompressedImages = this.state.compressedImagesToRender;
    this.setState({ compressing: true });
    this.state.imagesToRender.forEach(image => {
      const { dataUrl, fileID, imgFileSize } = image;
      var imageToCompress = new Image();
      imageToCompress.src = dataUrl;
      const imageDataUrl = FirebaseICU.compress(
        imageToCompress,
        500,
        Math.round(imgFileSize / 1024)
      );
      const newImageData = { imageDataUrl, fileID };
      newCompressedImages.unshift(newImageData);
    });
    this.setState({
      compressedImagesToRender: newCompressedImages,
      compressing: false,
      imagesToRender: []
    });
  }

  fileToDataUrl = file => {
    const fileID = file.name;
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = event => {
        let { imgFileSize, imgFileSizeFormatted } = FirebaseICU.getImageSize(
          event.target.result
        );
        resolve({
          imgFileSize,
          imgFileSizeFormatted,
          dataUrl: event.target.result,
          fileID
        });
      };
      reader.readAsDataURL(file);
    });
  };

  fileReaderArray = async arr => {
    let newImagesToRender = this.state.imagesToRender;
    for (let i = 0; i < arr.length; i++) {
      await this.fileToDataUrl(arr[i]).then(imageData => {
        newImagesToRender.unshift(imageData);
      });
    }
    return newImagesToRender;
  };

  _handleImageChange = async event => {
    //const file = event.target.files[0];

    console.log(this.props);

    this.setState({ inputting: true });
    console.log(event.target.files);
    let arr = this.props.singleImage
      ? [event.target.files[0]]
      : event.target.files;
    this.fileReaderArray(arr).then(dataUrlArr => {
      this.setState({
        imagesToRender: dataUrlArr,
        inputting: false,
        allowCompression: this.props.singleImage ? false : true
      });
    });
  };

  _handleUploadSingle = () => {
    const { imageDataUrl, fileID } = this.state.compressedImagesToRender[0];
    FirebaseICU.upload(imageDataUrl, `cover-images/${fileID}`)
      .then(() => {
        this.props.onUploadSuccess(`cover-images/${fileID}`);
        this.setState({
          uploading: false,
          uploadSuccess: true,
          compressedImagesToRender: []
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  _handleUpload = () => {
    this.setState({ uploading: true });
    let uploads = [];
    console.log("UPLOAD_FOLDER", this.state.uploadFolder)
    const imageUploadPath = this.state.compressedImagesToRender.forEach(
      image => {
        let uploadOp = FirebaseICU.upload(
          image.imageDataUrl,
          `${this.state.uploadFolder}/${image.fileID}`
        );
        uploads.push(uploadOp);
      }
    );
    const uploadsOperation = Promise.all(uploads);
    uploadsOperation.then(() => {
      this.setState({
        uploading: false,
        uploadSuccess: true,
        compressedImagesToRender: []
      });
    });
  };

  renderUploadButton = () => {
    if (
      this.state.compressedImagesToRender.length > 0 &&
      (this.state.uploadFolder || this.props.singleImage)
    ) {
      return (
        <Col style={{ padding: 0 }} md={4}>
          <label
            onClick={() => {
              this.props.singleImage
                ? this._handleUploadSingle()
                : this._handleUpload();
            }}
            class="button"
          >
            Upload Images
          </label>
        </Col>
      );
    } else {
      return (
        <Col md={4}>
          <label class="disabledButton" style={{ color: "#efefef" }}>
            Upload Images
          </label>
        </Col>
      );
    }
  };

  render() {
    return (
      <div>
        <Row>
          <Col md={6}>
            <input
              type="file"
              name="file"
              id="file"
              style={{ display: "none" }}
              multiple
              accept="image/"
              onChange={e => {
                this._handleImageChange(e);
              }}
              class="inputfile"
            />
            {this.state.allowCompression && (
              <label class="button" for="file">
                {!this.state.inputting && "Choose an image"}
                {this.state.inputting && "Loading Images"}
              </label>
            )}
            {this.state.imagesToRender.length > 0 && (
              <label
                onClick={() => {
                  this._handleCompressImages();
                }}
                class="button"
              >
                {this.state.compressing && "Compressing Images..."}
                {!this.state.compressing && "Compress Images"}
              </label>
            )}
          </Col>
          <Col md={6}>
            <Row>
              {this.renderUploadButton()}
              {!this.props.singleImage && (
                <FolderPicker
                  folder={this.state.uploadFolder}
                  handleChange={this._handleUploadFolderChange}
                />
              )}
            </Row>
          </Col>
        </Row>

        <Row>
          <Col xs={6} md={6}>
            <ImageList images={this.state.imagesToRender} />
          </Col>
          <Col xs={6} md={6}>
            <CompressedImageList images={this.state.compressedImagesToRender} />
          </Col>
        </Row>
        <Snackbar
          open={this.state.uploadSuccess}
          message="Upload(s) Sucessful"
          autoHideDuration={4000}
          onRequestClose={() => {
            this.setState({
              uploadSuccess: false
            });
          }}
        />
      </div>
    );
  }
}
