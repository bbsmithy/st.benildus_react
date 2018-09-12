import { auth } from "./fire";

export const signIn = (email, password) => {
  auth
    .signInWithEmailAndPassword(email, password)
    .then(() => console.log("LOGGED IN"))
    .catch(e => console.log(e));
};

export const getCurrentUser = () => {
  auth.onAuthStateChanged(user => {
    window.user = user; // user is undefined if no user signed in
    if (user) {
      console.log("USER IS LOGGED IN");
    } else {
      console.log("USER IS NOT LOGGED IN");
    }
  });
};
