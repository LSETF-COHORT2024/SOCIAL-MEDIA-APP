import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCAMMswG-oIqw79PHtIB30eMTUy9I-KRi8",
  authDomain: "picspile-fa219.firebaseapp.com",
  projectId: "picspile-fa219",
  storageBucket: "picspile-fa219.appspot.com",
  messagingSenderId: "933863688756",
  appId: "1:933863688756:web:3454337e17976c760b5861",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
export const storage = getStorage(app);

// export { app, firestore, storage };
