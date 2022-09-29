import { initializeApp } from "firebase/app";

import {
  signInWithPopup,
  signInWithRedirect,
  getAuth,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDIVqxnUc-5maZcf3RUltdhfCLiEWFVqps",
  authDomain: "practics-crwn-clothing-d.firebaseapp.com",
  projectId: "practics-crwn-clothing-d",
  storageBucket: "practics-crwn-clothing-d.appspot.com",
  messagingSenderId: "334508319486",
  appId: "1:334508319486:web:78437aa7432ed4debbfbaf",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const singInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDataModelForm = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);

  console.log(userSnapshot);
};
