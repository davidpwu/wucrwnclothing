import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyAor8rVG_a_dIrAm9NYME_KUwAZlkvyR6o",
  authDomain: "crwn-db-a84fd.firebaseapp.com",
  databaseURL: "https://crwn-db-a84fd.firebaseio.com",
  projectId: "crwn-db-a84fd",
  storageBucket: "crwn-db-a84fd.appspot.com",
  messagingSenderId: "232171834938",
  appId: "1:232171834938:web:de993dd24445293c4baf03",
  measurementId: "G-TF60MYZCSX"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();
  
  // Creates a user if there is none
  if (!snapshot.exists) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (err) {
      console.log("Error creating user.", err.message);
    }
  }

  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: "select_account"});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
