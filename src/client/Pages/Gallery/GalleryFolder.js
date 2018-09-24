import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Page from '../../components/Page/Page';
import LightBox from '../../components/Gallery/Lightbox';

class GalleryFolder extends Component {

  constructor(props){
    super(props);
    this.state = {
      currentFolder: `folders/${this.props.match.params.id}`,
      folderHistory: []
    }
  }

  _getTitle = () => {
    switch (this.props.match.params.id) {
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
    const previousFolder = this.state.currentFolder
    console.log("PREVIOUS FODLER:", previousFolder)
    this.setState({
      currentFolder: previousFolder
    })
    
  }

  render() {
    const title = this._getTitle();
    return (
      <div>
        <Navbar active={'Gallery'} />
        <Page title={title} fullWidth archive current={'Gallery'} onBackPressArchive={this._onBackPressedArchive}>
          <LightBox folder={this.state.currentFolder} useFolder={true} onFolderChange={(folder)=>{
            console.log("Changed to folder:", folder)
          }} showNavigation={this.props.match.params.id !== 'benildus-archive'} />
        </Page>
      </div>
    );
  }
}
export default GalleryFolder;
