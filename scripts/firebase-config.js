// Import the Firebase functions you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-database.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5tfnInqtyCVITwSQyxuJBKiGM_-pGP5g",
  authDomain: "fitnation-web.firebaseapp.com",
  databaseURL: "https://fitnation-web-default-rtdb.firebaseio.com",
  projectId: "fitnation-web",
  storageBucket: "fitnation-web.firebasestorage.app",
  messagingSenderId: "200432179824",
  appId: "1:200432179824:web:c4ad10b87aa53677fbf2b5",
  measurementId: "G-KT11BYCNKY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
