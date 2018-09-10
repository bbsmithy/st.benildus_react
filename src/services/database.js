import fire from './fire';

class Database {
  constructor() {
    this.database = fire.database();
  }

  requestGalleryImages = folder => {
    return new Promise((resolve, reject) => {
      this.database
        .ref(folder)
        .orderByKey()
        .limitToFirst(30)
        .once('value')
        .then(images => {
          const imagesVal = images.val();
          const imageKeys = Object.keys(imagesVal);
          let imageObjects = imageKeys.map((i, e) => {
            return {
              index: e,
              ...imagesVal[i]
            };
          });
          console.log(imageObjects);
          resolve(imageObjects);
        })
        .catch(err => {
          reject(err);
        });
    });
  };

  deleteGalleryImage = () => {};
}
export default new Database();
