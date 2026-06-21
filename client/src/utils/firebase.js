import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "notegenius-9a9ce.firebaseapp.com",
  projectId: "notegenius-9a9ce",
  storageBucket: "notegenius-9a9ce.firebasestorage.app",
  messagingSenderId: "488400809578",
  appId: "1:488400809578:web:d2b799f00a3394ba97a413"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export { auth, provider };
