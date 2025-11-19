import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAnWRkSEDBYmQVI0ThLd5YA7kkJE3FqhO8",
  authDomain: "disponibilidade-docentes-ifrj.firebaseapp.com",
  databaseURL: "https://disponibilidade-docentes-ifrj-default-rtdb.firebaseio.com/",
  projectId: "disponibilidade-docentes-ifrj",
  storageBucket: "disponibilidade-docentes-ifrj.firebasestorage.app",
  messagingSenderId: "300399994794",
  appId: "1:300399994794:web:a3191137bd395398f36dd3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;

