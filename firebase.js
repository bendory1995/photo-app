import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAojCu1TIMNb2w50DICgeOayH8vjYcKXT0",
  authDomain: "photo-app-46eae.firebaseapp.com",
  projectId: "photo-app-46eae",
  storageBucket: "photo-app-46eae.appspot.com",
  messagingSenderId: "833056749354",
  appId: "1:833056749354:web:c628ce76dd76763f1c9053",
};

// const firebaseConfig = {
//     apiKey: "AIzaSyAtX31-MUw1DOiitQ0b17psUlKBMnL-xSA",
//     authDomain: "interactive-journal-cop4331.firebaseapp.com",
//     projectId: "interactive-journal-cop4331",
//     storageBucket: "interactive-journal-cop4331.appspot.com",
//     messagingSenderId: "414492863642",
//     appId: "1:414492863642:web:29df146ef5a8f113798323",
//     measurementId: "G-XJJD98RWWF"
//   };

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
