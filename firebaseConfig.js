// firebaseConfig.js (For Firestore ONLY)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA93ljTWj2DRV2LLkH58801Ul418FVIgGE",
  authDomain: "photoapp-c733b.firebaseapp.com",
  projectId: "photoapp-c733b",
  storageBucket: "photoapp-c733b.firebasestorage.app",
  messagingSenderId: "641604443805",
  appId: "1:641604443805:web:92c65c5b297af9a41d3e74",
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firestore Database
const db = getFirestore(app);

// Initialize Firebase Authentication
// const auth = getAuth(app); // <--- Initialize Auth

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

// Export both db and auth
export { db, auth }; // <--- Export auth
