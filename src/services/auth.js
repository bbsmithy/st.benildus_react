import fire from './fire';

export const auth = fire.auth();

export const signIn = (email, password) => {
  return fire.auth().signInWithEmailAndPassword(email, password);
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    fire.auth().onAuthStateChanged(function(user) {
      if (user) {
        resolve(user);
      } else {
        reject();
        // No user is signed in.
      }
    });
  });
};
