import React, { Component } from 'react';
import './App.css';
import fbICU from './FirebaseICU';
import fire from '../../services/fire';
import Paper from 'material-ui/Paper';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Snackbar from 'material-ui/Snackbar';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import { Link } from 'react-router-dom';
import GalleryLightBox from '../../client/components/Gallery/Lightbox';

const NAV_TAB_UPLOAD_IMAGES = 0;
const NAV_TAB_DELETE_IMAGES = 1;

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
      deleteFolder: 'around-our-school'
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
      console.log(image);
      imageToCompress.src = dataUrl;
      const imageDataUrl = FirebaseICU.compress(imageToCompress, 500, Math.round(imgFileSize / 1024));
      const newImageData = { imageDataUrl, fileID };
      console.log(newImageData);
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

  _renderSelectedTab = () => {
    if (this.state.selectedTab === NAV_TAB_DELETE_IMAGES) {
      return (
        <div>
          <h3>Delete Images</h3>
          <hr />
          <Col md={9}>
            <GalleryLightBox folder={this.state.deleteFolder} editMode={true} />
          </Col>
          <Col md={3}>
            <FolderPicker folder={this.state.deleteFolder} handleChange={this._handleDeleteFolderChange} />
          </Col>
        </div>
      );
    }
    return (
      <div>
        <h3>Upload Images</h3>
        <hr />
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
            <div className="logo col-md-5">
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
                  <Link to={'/gallery'} style={{ color: 'white' }}>
                    Gallery
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
              </div>
            </Col>
            <Col md={10}>
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
      </div>
    );
  }
}

export default App;
