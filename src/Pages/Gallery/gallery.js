import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Page from "../../components/Page/Page";
import ArchiveGallery from "../../components/Gallery/Gallery";

function makeUnsplashSrc(id) {
  return `https://unsplash.com/photos/SYzUF6XcWBY`;
}
function makeUnsplashSrcSet(id, size) {
  return `https://unsplash.com/photos/SYzUF6XcWBY `;
}
function makeUnsplashThumbnail(id, orientation = "landscape") {
  return `https://unsplash.com/photos/SYzUF6XcWBY `;
}

const DEFAULT_IMAGES = [
  {
    id: "1470619549108-b85c56fe5be8",
    caption: "Photo by Alan Emery",
    orientation: "square",
    useForDemo: true
  }, // https://unsplash.com/photos/SYzUF6XcWBY (Flamingo)
  {
    id: "1471079502516-250c19af6928",
    caption: "Photo by Jeremy Bishop",
    orientation: "landscape",
    useForDemo: true
  }, // https://unsplash.com/photos/GIpGxe2_cT4 (Turtle)
  {
    id: "1454023492550-5696f8ff10e1",
    caption: "Photo by Jessica Weiller",
    orientation: "landscape",
    useForDemo: true
  }, // https://unsplash.com/photos/LmVSKeDy6EA (Tiger)
  {
    id: "1470854989922-5be2f7456d78",
    caption: "Photo by Piotr Łaskawski",
    orientation: "landscape",
    useForDemo: true
  }, // https://unsplash.com/photos/GXMr7BadXQo (Hedgehog)
  {
    id: "1470317596697-cbdeda56f999",
    caption: "Photo by Michel Bosma",
    orientation: "landscape",
    useForDemo: true
  } // https://unsplash.com/photos/XgF9e93Tkt0 (Ladybug)
];

class Gallery extends Component {
  render() {
    return (
      <div>
        <Navbar active={"Gallery"} />
        <Page title={"Gallery"} fullWidth current={"Gallery"}>
          <ArchiveGallery />
          {/* <Gallery
            images={DEFAULT_IMAGES.map(
              ({ caption, id, orientation, useForDemo }) => ({
                src: makeUnsplashSrc(id),
                thumbnail: makeUnsplashThumbnail(id, orientation),
                srcSet: [
                  makeUnsplashSrcSet(id, 1024),
                  makeUnsplashSrcSet(id, 800),
                  makeUnsplashSrcSet(id, 500),
                  makeUnsplashSrcSet(id, 320)
                ],
                caption,
                orientation,
                useForDemo
              })
            )}
          /> */}
        </Page>
      </div>
    );
  }
}
export default Gallery;
