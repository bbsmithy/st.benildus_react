import React, { Component } from "react";
import fire from "../../services/fire";
import Paper from "material-ui/Paper";
import SelectField from "material-ui/SelectField";
import TextField from "material-ui/TextField";
import Button from "material-ui/FlatButton";
import CircularProgress from "material-ui/CircularProgress";
import MenuItem from "material-ui/MenuItem";
import Snackbar from "material-ui/Snackbar";
import Grid from "react-bootstrap/lib/Grid";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import { Link } from "react-router-dom";
import GalleryLightBox from "../../client/components/Gallery/Lightbox";
import Database from "../../services/database";
import Storage from "../../services/storage";
import ManagerHeader from "../components/ManagerHeader";
import "./index.css";

import { ImageCompressor } from "../components/ImageCompressor";

export default class ArchiveManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      createFolderName: "",
      creatingFolder: false,
      folderPath: "/benildus-archive",
      archiveLocation: [
        { location: "/benildus-archive", name: "Archive Manager" }
      ],
      loadingFolders: true,
      uploadImage: false
    };
  }

  componentWillMount() {
    this._getFolders();
  }

  _createFolder = () => {
    const folderPath = `${this.state
      .folderPath}/folders/${this.state.createFolderName.toLowerCase()}`;
    const createFolderName = this.state.createFolderName;
    this.setState({ creatingFolder: true });
    Database.createFolder(folderPath, createFolderName).then(() => {
      this.setState({ creatingFolder: false });
      this._getFolders();
    });
  };

  _getFolders = folderPath => {
    this.setState({
      loadingFolders: true
    });
    Database.getFolder(folderPath || this.state.folderPath).then(folder => {
      const folderValue = folder.val();
      const coverImagePromises = [];
      Object.keys(folderValue.folders).forEach(folder => {
        if (folderValue.folders[folder].coverImage) {
          coverImagePromises.push(
            Storage.getDownloadUrl(folderValue.folders[folder].coverImage.src)
          );
        }
      });
      Promise.all(coverImagePromises).then(coverImages => {
        this.setState({
          coverImages: coverImages,
          folderStructure: folderValue.folders,
          folderName: folderValue.folderName,
          folderPath: folderValue.folderPath,
          loadingFolders: false
        });
      });
    });
  };

  _addCoverPhoto = folder => {
    this.setState({
      addCoverImage: true,
      folderToCover: folder
    });
  };

  _renderFolders = () => {
    return Object.keys(this.state.folderStructure).map((key, i) => {
      return (
        <Row style={{ padding: 10, marginBottom: 5 }}>
          <Col
            onClick={() => {
              this.setState({
                folderStructure: this.state.folderStructure[key].folders,
                folderName: this.state.folderStructure[key].folderName,
                folderPath: this.state.folderStructure[key].folderPath,
                archiveLocation: [
                  ...this.state.archiveLocation,
                  {
                    location: this.state.folderStructure[key].folderPath,
                    name: this.state.folderStructure[key].folderName
                  }
                ]
              });
            }}
            className="button"
            md={10}
          >
            <img
              src={
                this.state.coverImages[i] ||
                require("../../assets/placeholder-image.png")
              }
              height={100}
              style={{ marginRight: 20 }}
            />
            <a style={{ display: "inline-block" }}>
              <h4>{this.state.folderStructure[key].folderName}</h4>
            </a>
            <span
              style={{ display: "inline-block", padding: 40 }}
              className="glyphicon glyphicon-chevron-right pull-right"
            />
          </Col>
          <Col md={2}>
            <label
              className="button"
              style={{
                backgroundColor: "red",
                width: "100%",
                color: "white",
                padding: 10
              }}
            >
              <span className="glyphicon glyphicon-trash" />
              {"   "}
              <span>Delete</span>
            </label>
            <label
              className="button"
              style={{
                backgroundColor: "blue",
                width: "100%",
                color: "white"
              }}
              onClick={() => {
                this._addCoverPhoto(this.state.folderStructure[key]);
              }}
            >
              <span className="glyphicon glyphicon-camera" />
              {"   "}
              <span>Add Cover</span>
            </label>
          </Col>
        </Row>
      );
    });
  };

  render() {
    if (this.state.addCoverImage) {
      return (
        <div>
          <ManagerHeader />
          <Grid>
            <Row>
              <div style={{ display: "inline-block" }}>
                <div
                  onClick={() => {
                    this.setState({ addCoverImage: false });
                  }}
                  style={{ display: "inline-block", marginRight: 20 }}
                >
                  <span
                    className="glyphicon glyphicon-circle-arrow-left"
                    style={{ fontSize: 25 }}
                  />
                </div>
                <h2 style={{ display: "inline-block" }}>
                  Add Cover Image for{": "}
                  {this.state.folderToCover.folderName}
                </h2>
              </div>
            </Row>
            <hr />
            <Row>
              <ImageCompressor
                singleImage={true}
                onUploadSuccess={url => {
                  console.log("Uplaod success");
                  Database.createCoverImage(
                    url,
                    this.state.folderToCover.folderPath
                  )
                    .then(success => {
                      console.log(success);
                    })
                    .catch(err => {
                      console.log(err);
                    });
                }}
              />
            </Row>
          </Grid>
        </div>
      );
    } else if (this.state.uploadImage) {
      return (
        <div>
          <ManagerHeader />
          <Grid>
            <Row>
              <div style={{ display: "inline-block" }}>
                <div
                  onClick={() => {
                    this.setState({ uploadImage: false });
                  }}
                  style={{ display: "inline-block", marginRight: 20 }}
                >
                  <span
                    className="glyphicon glyphicon-circle-arrow-left"
                    style={{ fontSize: 25 }}
                  />
                </div>
                <h2 style={{ display: "inline-block" }}>
                  Upload Images{": "}
                  {this.state.folderStructure.folderName}
                </h2>
              </div>
            </Row>
            <hr />
            <Row>
              <ImageCompressor uploadPath={`${this.state.folderPath}/images`} />
            </Row>
          </Grid>
        </div>
      );
    }
    return (
      <div>
        <ManagerHeader />
        <Grid>
          <Row>
            {this.state.archiveLocation &&
              this.state.archiveLocation.map((folder, i) => {
                return (
                  <div style={{ display: "inline-block" }}>
                    <a
                      onClick={e => {
                        e.preventDefault();
                        const newPathDisplay = [...this.state.archiveLocation];
                        newPathDisplay.length = i + 1;
                        this.setState({
                          archiveLocation: newPathDisplay
                        });
                        this._getFolders(folder.location);
                      }}
                      style={{
                        display: "inline-block",
                        marginLeft: "10px",
                        marginRight: "10px"
                      }}
                    >
                      <h2>{folder.name}</h2>
                    </a>
                    <h2 style={{ display: "inline-block" }}>/</h2>
                  </div>
                );
              })}

            <hr />
          </Row>
          {!this.state.loadingFolders &&
            this.state.folderStructure &&
            this._renderFolders()}
          {this.state.loadingFolders && (
            <CircularProgress color={"#003D7D"} size={80} thickness={5} />
          )}
          <hr />
          <Row style={{ marginBottom: 50 }}>
            <Col md={12}>
              <label
                className="button"
                style={{ marginTop: 10 }}
                data-toggle="modal"
                data-target="#myModal"
              >
                <span className="glyphicon glyphicon-plus" />{" "}
                {this.state.creatingFolder ? (
                  "Creating Folder..."
                ) : (
                  "Add Folder"
                )}
              </label>
              <div
                className="button"
                style={{ marginTop: 10, display: "inline-block" }}
                data-toggle="modal"
                onClick={() => {
                  this.setState({
                    uploadImage: true
                  });
                }}
              >
                <span className="glyphicon glyphicon-camera" /> Upload Image
              </div>
            </Col>
          </Row>
        </Grid>
        <div
          class="modal fade"
          id="myModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="myModalLabel"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
                <h4 class="modal-title" id="myModalLabel">
                  Add Folder
                </h4>
              </div>
              <div class="modal-body">
                <div class="input-group input-group-lg">
                  <input
                    type="text"
                    class="form-control"
                    onChange={e => {
                      this.setState({ createFolderName: e.target.value });
                    }}
                    placeholder="Folder Name"
                  />
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-default"
                  data-dismiss="modal"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  class="btn btn-primary"
                  disabled={this.state.folderName < 1}
                  data-dismiss="modal"
                  onClick={this._createFolder}
                >
                  Create Folder
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}