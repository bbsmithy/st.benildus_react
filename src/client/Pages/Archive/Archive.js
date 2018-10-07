import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Page from '../../components/Page/Page';
import LightBox from '../../components/Gallery/Lightbox';

class Archive extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentFolder: `folders/benildus-archive`,
      title: 'St.Benildus Archive'
    };
  }

  _onFolderChanged = folder => {
    this.setState({
      currentFolder: folder.folderPath,
      title: folder.folderName
    });
  };

  _onBackPressedArchive = () => {
    this.setState({
      currentFolder: 'folders/benildus-archive'
    });
  };

  render() {
    return (
      <div>
        <Navbar active={'Archive'} />
        <Page
          title={'St.Benildus College Archive'}
          fullWidth
          current={'Gallery'}
          archive={true}
          onBackPressArchive={this._onBackPressedArchive}
        >
          <LightBox folder={this.state.currentFolder} useFolder={true} onFolderChanged={this._onFolderChanged} />
        </Page>
      </div>
    );
  }
}
export default Archive;
