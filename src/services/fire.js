var firebase = require('firebase/app');
// all 3 are optional and you only need to require them at the start
require('firebase/database');
require('firebase/storage');
require('firebase/auth');

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyDpV-gunWUZe0PZZHWR3p_coOn1OT-Zfok',
  authDomain: 'benildus-college.firebaseapp.com',
  databaseURL: 'https://benildus-college.firebaseio.com',
  projectId: 'benildus-college',
  storageBucket: 'benildus-college.appspot.com',
  messagingSenderId: '738148456698'
};

const fire = firebase.initializeApp(config);

export default fire;
export const auth = firebase.auth();
