import { initializeApp } from "firebase/app";

import {
  signInWithPopup,
  signInWithRedirect,
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";

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
export const singInWithGoogleRedirect = () =>
  signInWithRedirect(auth, provider);

export const db = getFirestore();

export const addCollectionAndDocuments = async (collectioKey, objetToAdd) => {
  const collectionRef = collection(db, collectioKey);
  const batch = writeBatch(db);

  objetToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();

  console.log("done");
};

export const getCollectionAndDocuments = async () => {
  const collectonRef = collection(db, "categories");
  const q = query(collectonRef);

  const querySnapshot = await getDocs(q);
  const documentMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data();
    acc[title.toLowerCase()] = items;

    return acc;
  }, {});
  return documentMap;
};

export const createUserDataModelForm = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("You are not allowed to sign in", error);
    }
  }
  return userDocRef;
};

export const createUserAuthFromEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signAuthInWIthEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => {
  return await signOut(auth);
};

export const onAuthStateChangedListener = (callBack) =>
  onAuthStateChanged(auth, callBack);
