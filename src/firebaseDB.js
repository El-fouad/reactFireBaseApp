import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDKcr2LdAe0bPMJICEmeula5UyGVRTBx38",
  authDomain: "aynaa-1c3d7.firebaseapp.com",
  projectId: "aynaa-1c3d7",
  storageBucket: "aynaa-1c3d7.appspot.com",
  messagingSenderId: "468063175990",
  appId: "1:468063175990:web:b99e33414341fdcea7df97",
};

const app = initializeApp(firebaseConfig);

//  auth
export const auth = getAuth(app);
