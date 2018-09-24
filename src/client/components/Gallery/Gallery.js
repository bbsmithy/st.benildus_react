import React, { Component } from 'react';
import Lightbox from 'react-images';
import { Link } from 'react-router-dom';
import { folders } from './folders';
import Database from '../../../services/database';
import Storage from '../../../services/storage';

export default class Sample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lightboxIsOpen: false,
      coverImages: [],
      isFetchingCoverImages: true
    };
  }

  componentWillMount(){
    if(this.props.useDynamic) this._getGalleryFolders();
  }

  _getGalleryFolders = () => {
    this.setState({
      loadingFolders: true
    })
    Database.getFolder('/folders').then((res)=>{
      const folderValue = res.val();
      const coverImagePromises = [];
      Object.keys(folderValue).forEach(folder => {
        if (folderValue[folder].coverImage) {
          coverImagePromises.push(
            Storage.getDownloadUrl(folderValue[folder].coverImage.src)
          );
        }
      });
      Promise.all(coverImagePromises).then((coverImages)=>{
        this.setState({
          folders: folderValue,
          coverImages: coverImages,
          loadingFolders: false
        })
      })
     
    })
  }

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

  renderFoldersDynamically() {
    if (this.state.loadingFolders){
      return "loading"
    }else{
      const gallery = Object.keys(this.state.folders).map((key, i) => {
        return (
          <div className="col-md-4 col-sm-4 col-xs-12">
            <div class="album-cover">
              <a href={`gallery/${key}`}>
                <img className="img-responsive" src={this.state.coverImages[i]} />
              </a>
              <div className="desc">
                <h2>
                  <small>
                    <a href={`gallery/${key}`}>{this.state.folders[key].folderName}</a>
                  </small>
                </h2>
              </div>
            </div>
          </div>
        );
      });
      return <div>{gallery}</div>;
    }
  }

  render() {
    return <div>{this.renderFolders()}</div>;
  }
}
