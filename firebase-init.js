import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-analytics.js";

const firebaseConfig = {
      apiKey: "AIzaSyD3twgkTBN4DFUFFryiqIrFuKQI6yuxUTo",
      authDomain: "xox-game-32a4c.firebaseapp.com",
      databaseURL: "https://xox-game-32a4c-default-rtdb.europe-west1.firebasedatabase.app",
      projectId: "xox-game-32a4c",
      storageBucket: "xox-game-32a4c.firebasestorage.app",
      messagingSenderId: "599895312388",
      appId: "1:599895312388:web:8dd26975ab2403f992cd51",
      measurementId: "G-JEWG9CNH1B"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);