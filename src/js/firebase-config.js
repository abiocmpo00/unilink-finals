import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCocpTBjhdkSEWjodUHd0nTiaEIRZNCVQc",
  authDomain: "unilink-finals.firebaseapp.com",
  projectId: "unilink-finals",
  storageBucket: "unilink-finals.appspot.com",
  messagingSenderId: "864743370858",
  appId: "1:864743370858:web:43665c881afd6230cb1a13"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };