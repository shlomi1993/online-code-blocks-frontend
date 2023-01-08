// Written by Shlomi Ben-Shushan.

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "[FIREBASE_API_KEY_REMOVED]",
  authDomain: "onlinecodeblocks.firebaseapp.com",
  projectId: "onlinecodeblocks",
  storageBucket: "onlinecodeblocks.appspot.com",
  messagingSenderId: "685567753025",
  appId: "1:685567753025:web:ad75e8ef9646fa07c17fc0",
  measurementId: "G-6QK740NM0T"
};

const firebase = initializeApp(firebaseConfig);

export default firebase;
