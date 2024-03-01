// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyAbRv61gM6vrnce7xVgvt7iMuW3vtYGtBY",
  authDomain: "picspile-510b8.firebaseapp.com",
  projectId: "picspile-510b8",
  storageBucket: "picspile-510b8.appspot.com",
  messagingSenderId: "157679901256",
  appId: "1:157679901256:web:f671185f4a543632add67d",
  measurementId: "G-EETGJS7F1J",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
// const analytics = getAnalytics(app);
// const firestore = getFirestore(app);
// const storage = getStorage(app);

export { app, auth, firestore, storage };
