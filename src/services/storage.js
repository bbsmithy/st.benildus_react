import fire from './fire';

class Storage {
  constructor() {
    this.storage = fire.storage();
    this.database = fire.database();
  }
  getDownloadUrl = filePath => {
    return new Promise((resolve, reject) => {
      let src;
      this.storage
        .ref(filePath)
        .getDownloadURL()
        .then(file => {
          resolve(file);
        })
        .catch(error => {
          reject(error);
        });
    });
  };

  deleteImages = urls => {
    let deleteActions = [];
    console.log(urls);
    urls.forEach(url => {
      deleteActions.push(this.storage.ref(url).delete());
    });
    return Promise.all(deleteActions);
  };

  getImages = async folder => {
    const downloads = [];
    let val;
    const ref = this.database.ref(folder);
    await ref.once('value').then(async data => {
      const keys = Object.keys(data.val());
      for (let i = 0; i < keys.length; i++) {
        let image = this.getDownloadUrl(data.val()[keys[i]].filePath);
        downloads.push(image);
      }
      await Promise.all(downloads).then(value => {
        val = value;
      });
    });
    return val;
  };
}
export default new Storage();
