import React, { Component } from 'react';
import './App.css';
import fbICU from './FirebaseICU';
import fire from '../../services/fire';
import Paper from 'material-ui/Paper';
import SelectField from 'material-ui/SelectField';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/FlatButton';
import MenuItem from 'material-ui/MenuItem';
import Snackbar from 'material-ui/Snackbar';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import { Link } from 'react-router-dom';
import GalleryLightBox from '../../client/components/Gallery/Lightbox';
import Database from '../../services/database';
import Storage from '../../services/storage';

const NAV_TAB_UPLOAD_IMAGES = 0;
const NAV_TAB_DELETE_IMAGES = 1;
const NAV_TAB_CREATE_FOLDERS_IMAGES = 2;

const FirebaseICU = new fbICU(fire.storage());

const FolderPicker = props => {
  return (
    <SelectField hintText="Select Folder" value={props.folder} onChange={props.handleChange}>
      <MenuItem value={'around-our-school'} primaryText="Around Our School" />
      <MenuItem value={'benildus-college-archive'} primaryText="St.Benildus College Archive" />
      <MenuItem value={'extra-curricular'} primaryText="Extra Curricular" />
      <MenuItem value={'in-the-classroom'} primaryText="In the Classroom" />
      <MenuItem value={'music-art-culture'} primaryText="Music, Art & Culture" />
      <MenuItem value={'outstanding-achievement'} primaryText="Outstanding Achievements" />
      <MenuItem value={'run-for-life'} primaryText="Run for Life" />
      <MenuItem value={'sports'} primaryText="Sports" />
      <MenuItem value={'transition-year'} primaryText="Transition Year" />
    </SelectField>
  );
};

const ImageRow = props => {
  return (
    <Paper class="imageRow">
      <Row style={{ padding: 15 }}>
        <Col md={6}>
          <img style={{ width: '100%' }} src={props.image} />
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
    return <ImageRow image={image.dataUrl} imageSize={image.imgFileSizeFormatted} />;
  });
  return <div>{listImages}</div>;
};

const CompressedImageList = props => {
  const { images } = props;

  const listImages = images.map(image => {
    const { imageDataUrl } = image;
    let imageSize = FirebaseICU.getImageSize(imageDataUrl);
    return <ImageRow image={imageDataUrl} imageSize={imageSize.imgFileSizeFormatted} />;
  });
  return <div>{listImages}</div>;
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imagesToRender: [],
      compressedImagesToRender: [],
      selectedTab: 0,
      deleteFolder: 'around-our-school',
      selectedImages: {}
    };
  }

  //Put files into array
  //Loop through array
  //First read each with filereader output images using file.src 1/4 image size
  //When u press submit loop through file array compress (J-I-C) a

  _handleUploadFolderChange = (event, index, value) => {
    this.setState({
      uploadFolder: value
    });
  };

  _handleDeleteFolderChange = (event, index, value) => {
    this.setState({
      deleteFolder: value
    });
  };

  _handleCompressImages() {
    let newCompressedImages = this.state.compressedImagesToRender;
    this.setState({ compressing: true });
    this.state.imagesToRender.forEach(image => {
      const { dataUrl, fileID, imgFileSize } = image;
      var imageToCompress = new Image();
      imageToCompress.src = dataUrl;
      const imageDataUrl = FirebaseICU.compress(imageToCompress, 500, Math.round(imgFileSize / 1024));
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
        let { imgFileSize, imgFileSizeFormatted } = FirebaseICU.getImageSize(event.target.result);
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

  renderUploadButton = () => {
    if (this.state.compressedImagesToRender.length > 0 && this.state.uploadFolder) {
      return (
        <Col style={{ padding: 0 }} md={4}>
          <label
            onClick={() => {
              this._handleUpload();
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
          <label class="disabledButton" style={{ color: '#efefef' }}>
            Upload Images
          </label>
        </Col>
      );
    }
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

    this.setState({ inputting: true });
    console.log(event.target.files);
    let arr = event.target.files;
    this.fileReaderArray(arr).then(dataUrlArr => {
      this.setState({
        imagesToRender: dataUrlArr,
        inputting: false
      });
    });
  };

  _handleUpload = () => {
    this.setState({ uploading: true });
    let uploads = [];
    this.state.compressedImagesToRender.forEach(image => {
      let uploadOp = FirebaseICU.upload(image.imageDataUrl, `${this.state.uploadFolder}/${image.fileID}`);
      uploads.push(uploadOp);
    });
    const uploadsOperation = Promise.all(uploads);
    uploadsOperation.then(() => {
      this.setState({
        uploading: false,
        uploadSuccess: true,
        compressedImagesToRender: []
      });
    });
  };

  _onImageSelected = obj => {
    this.setState({
      selectedImages: { ...this.state.selectedImages, [obj.index]: obj }
    });
  };

  _onImageUnselected = obj => {
    let selectedImages = { ...this.state.selectedImages };
    delete selectedImages[obj.index];
    this.setState({
      selectedImages: selectedImages
    });
  };

  _deleteImages = () => {
    const keys = Object.keys(this.state.selectedImages).map(image => {
      return this.state.selectedImages[image].key;
    });

    const srcUrls = Object.keys(this.state.selectedImages).map(image => {
      return this.state.selectedImages[image].src;
    });

    const thumbUrls = Object.keys(this.state.selectedImages).map(image => {
      return this.state.selectedImages[image].thumbnail;
    });

    Database.deleteGalleryImages(this.state.deleteFolder, keys)
      .then(res => {
        Storage.deleteImages([...srcUrls, ...thumbUrls]).then(() => {
          console.log('SUCCESS');
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  _createFolder = () => {
    Database.createFolder(this.state.createFolderName, 'Test').then(res => {
      console.log('Sucess');
    });
  };

  _renderSelectedTab = () => {
    if (this.state.selectedTab === NAV_TAB_DELETE_IMAGES) {
      return (
        <div>
          <Col md={9}>
            <GalleryLightBox
              folder={this.state.deleteFolder}
              editMode={true}
              onImageSelected={this._onImageSelected}
              onImageUnselected={this._onImageUnselected}
            />
          </Col>
          <Col md={3}>
            <FolderPicker folder={this.state.deleteFolder} handleChange={this._handleDeleteFolderChange} />
            {Object.keys(this.state.selectedImages).length > 0 && (
              <div type="button" class="btn btn-danger btn-lg" data-toggle="modal" data-target="#myModal">
                Delete
              </div>
            )}
          </Col>
        </div>
      );
    } else if (this.state.selectedTab === NAV_TAB_CREATE_FOLDERS_IMAGES) {
      return (
        <div>
          <Col md={9}>
            <h4>Folder Name: </h4>
            <TextField
              id="uncontrolled"
              label="Uncontrolled"
              fullWidth
              margin="normal"
              onChange={e => {
                this.setState({ createFolderName: e.target.value });
              }}
            />
            <label class="button" onClick={this._createFolder}>
              Create Folder
            </label>
          </Col>
        </div>
      );
    }
    return (
      <div>
        <Col md={6}>
          <input
            type="file"
            name="file"
            id="file"
            style={{ display: 'none' }}
            multiple
            accept="image/"
            onChange={e => {
              this._handleImageChange(e);
            }}
            class="inputfile"
          />
          <label class="button" for="file">
            {!this.state.inputting && 'Choose a image'}
            {this.state.inputting && 'Loading Images'}
          </label>
          {this.state.imagesToRender.length > 0 && (
            <label
              onClick={() => {
                this._handleCompressImages();
              }}
              class="button"
            >
              {this.state.compressing && 'Compressing Images...'}
              {!this.state.compressing && 'Compress Images'}
            </label>
          )}
        </Col>
        <Col md={6}>
          <Row>
            {this.renderUploadButton()}
            <FolderPicker folder={this.state.uploadFolder} handleChange={this._handleUploadFolderChange} />
          </Row>
        </Col>
      </div>
    );
  };

  render() {
    return (
      <div>
        <header className="header">
          <div className="header-main container">
            <div className="logo col-md-6">
              <img id="logo" width="125px" src={require('../../assets/fullheader.png')} alt="Logo" />
            </div>
            <div className="col-md-5">
              <ul className="navbar-right" style={{ marginTop: 15 }}>
                <li className="divider" style={{ display: 'inline-block', color: 'white' }}>
                  <Link to={'/'} style={{ color: 'white', marginRight: 10 }}>
                    Home
                  </Link>
                </li>
                <li style={{ display: 'inline-block' }}>
                  <Link to={'/gallery-manager'} style={{ color: 'white', marginRight: 10 }}>
                    Gallery
                  </Link>
                </li>
                <li style={{ display: 'inline-block' }}>
                  <Link to={'/gallery-manager'} style={{ color: 'white' }}>
                    Archive
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </header>
        <Grid>
          <Row>
            <Col md={2} style={{ marginTop: 20 }}>
              <div class="list-group">
                <a
                  onClick={() => {
                    this.setState({
                      selectedTab: NAV_TAB_UPLOAD_IMAGES
                    });
                  }}
                  class={
                    this.state.selectedTab === NAV_TAB_UPLOAD_IMAGES ? 'list-group-item active' : 'list-group-item'
                  }
                >
                  Upload Images
                </a>
                <a
                  onClick={() => {
                    this.setState({
                      selectedTab: NAV_TAB_DELETE_IMAGES
                    });
                  }}
                  class={
                    this.state.selectedTab === NAV_TAB_DELETE_IMAGES ? 'list-group-item active' : 'list-group-item'
                  }
                >
                  Delete Images
                </a>
                <a
                  onClick={() => {
                    this.setState({
                      selectedTab: NAV_TAB_CREATE_FOLDERS_IMAGES
                    });
                  }}
                  class={
                    this.state.selectedTab === NAV_TAB_CREATE_FOLDERS_IMAGES
                      ? 'list-group-item active'
                      : 'list-group-item'
                  }
                >
                  Create Folders
                </a>
              </div>
            </Col>
            <Col md={10}>
              <h3>Gallery Manager</h3>
              <hr />
              <Row style={{ marginTop: 10 }}>{this._renderSelectedTab()}</Row>
              <Row>
                <Col xs={6} md={6}>
                  <ImageList images={this.state.imagesToRender} />
                </Col>
                <Col xs={6} md={6}>
                  <CompressedImageList images={this.state.compressedImagesToRender} />
                </Col>
              </Row>
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
        </Grid>
        <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
                <h4 class="modal-title" id="myModalLabel">
                  Are you sure you want to delete these images?
                </h4>
              </div>
              <div class="modal-body">
                {Object.keys(this.state.selectedImages).map(key => {
                  return (
                    <img style={{ display: 'inline-block' }} src={this.state.selectedImages[key].src} width="100%" />
                  );
                })}
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">
                  Cancel
                </button>
                <button type="button" class="btn btn-danger" onClick={this._deleteImages}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
