import fire from "./fire";

class Database {
  constructor() {
    this.database = fire.database();
    this.storage = fire.storage();
  }

  requestGalleryImages = folder => {
    return new Promise((resolve, reject) => {
      this.database
        .ref(folder)
        .orderByKey()
        .limitToFirst(30)
        .once("value")
        .then(images => {
          const imagesVal = images.val();
          const imageKeys = Object.keys(imagesVal);
          let imageObjects = imageKeys.map((i, e) => {
            return {
              index: e,
              key: i,
              ...imagesVal[i]
            };
          });
          console.log("GALLERY IMAGES", imageObjects);
          resolve(imageObjects);
        })
        .catch(err => {
          reject(err);
        });
    });
  };

  deleteGalleryImages = (folder, keys) => {
    const imageNodes = [];
    keys.forEach(key => {
      imageNodes.push(this.database.ref(`${folder}/${key}`).remove());
    });
    return Promise.all(imageNodes);
  };

  createCoverImage = (url, folderPath) => {
    return this.database.ref(`${folderPath}/coverImage`).update({
      src: url
    });
  };

  createFolder = (folderPath, folderName) => {
    return this.database.ref(folderPath).set({
      folderName: folderName,
      folderPath: folderPath
    });
  };

  deleteFolder = folder => {
    return this.database.ref(folder).remove();
  };

  getFolder = folderPath => {
    return this.database.ref(folderPath).once("value");
  };
}
export default new Database();
