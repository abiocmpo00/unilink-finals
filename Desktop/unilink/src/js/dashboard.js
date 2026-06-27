import { db } from './firebase-config.js';
import { collection, onSnapshot } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const messageCounter = document.getElementById('messageCounter');

if (messageCounter) {
    // Listen directly to your live "messages" collection database folder
    onSnapshot(collection(db, "messages"), (snapshot) => {
        // snapshot.size returns the total number of document entries inside the collection
        messageCounter.textContent = snapshot.size;
    });
}