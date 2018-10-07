import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Page from '../../components/Page/Page';
import LightBox from '../../components/Gallery/Lightbox';

class GalleryFolder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentFolder: `folders/${props.match.params.id}`,
      title: this._getTitle(props.match.params.id)
    };
  }

  _getTitle = id => {
    switch (id) {
      case 'around-our-school': {
        return 'Around Our School';
      }
      case 'benildus-archive': {
        return 'St.Benildus Archive';
      }
      case 'extra-curricular': {
        return 'Extra Curricular';
      }
      case 'in-the-classroom': {
        return 'In the Classroom';
      }
      case 'music-art-culture': {
        return 'Music, Art and Culture';
      }
      case 'outstanding-achievement': {
        return 'Outstanding Achievements';
      }
      case 'run-for-life': {
        return 'Run for Life';
      }
      case 'sports': {
        return 'Sports';
      }
      case 'transition-year': {
        return 'Transition Year';
      }
      default: {
        return 'Gallery';
      }
    }
  };

  _onBackPressedArchive = () => {
    this.setState({
      currentFolder: 'folders/benildus-archive'
    });
  };

  _onFolderChanged = folder => {
    this.setState({
      currentFolder: folder.folderPath,
      title: folder.folderName
    });
  };

  render() {
    return (
      <div>
        <Navbar active={'Gallery'} />
        <Page title={this.state.title} fullWidth current={'Gallery'}>
          <LightBox
            folder={this.state.currentFolder}
            useFolder={true}
            showNavigation={this.props.match.params.id !== 'benildus-archive'}
            onFolderChanged={this._onFolderChanged}
          />
        </Page>
      </div>
    );
  }
}
export default GalleryFolder;
