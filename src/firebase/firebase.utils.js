import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCUcYqEZbGXiJaUNHBRPLCPlJf1MKmf1YM",
  authDomain: "crwn-photo-db.firebaseapp.com",
  databaseURL: "https://crwn-photo-db.firebaseio.com",
  projectId: "crwn-photo-db",
  storageBucket: "crwn-photo-db.appspot.com",
  messagingSenderId: "177242670928",
  appId: "1:177242670928:web:e7cab4891c2f5a53cace55",
  measurementId: "G-FJ9ZGR7YXS"
};

firebase.initializeApp(config);

// receives the auth object that comes back
// from firebase upon signing in with google
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`),
        snapShot = await userRef.get();

  console.log(snapShot);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
// make the google auth pop-up appear
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;