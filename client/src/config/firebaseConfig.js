// firebaseConfig.jsx
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "crescendo-website-5cb88.firebaseapp.com",
  projectId: "crescendo-website-5cb88",
  storageBucket: "crescendo-website-5cb88.appspot.com",
  messagingSenderId: "49917734198",
  appId: "1:49917734198:web:48c3598fe3d909496a5797",
  measurementId: "G-N6YBPJDFX3",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
