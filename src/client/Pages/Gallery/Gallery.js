import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Page from '../../components/Page/Page';
import ArchiveGallery from '../../components/Gallery/Gallery';

class Gallery extends Component {
  render() {
    return (
      <div>
        <Navbar active={'Gallery'} />
        <Page title={'Gallery'} fullWidth current={'Gallery'}>
          <ArchiveGallery />
        </Page>
      </div>
    );
  }
}
export default Gallery;
