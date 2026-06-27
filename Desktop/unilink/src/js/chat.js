import { db } from './firebase-config.js';
import { 
    collection, 
    addDoc, 
    query, 
    orderBy, 
    onSnapshot, 
    serverTimestamp 
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const chatForm = document.getElementById('chatForm');
const messageInput = document.getElementById('messageInput');
const stream = document.querySelector('.message-stream');

// Target a cloud collection named "messages"
const messagesCollection = collection(db, "messages");

// 1. SAVE TO DATABASE ON SUBMIT
chatForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const text = messageInput.value.trim();
    if (text === '') return;

    try {
        await addDoc(messagesCollection, {
            text: text,
            sender: "River Daz",
            timestamp: serverTimestamp()
        });
        messageInput.value = '';
    } catch (error) {
        console.error("Error writing to database: ", error);
    }
});

// 2. LISTEN LIVE FOR NEW BUBBLES
const q = query(messagesCollection, orderBy("timestamp", "asc"));
onSnapshot(q, (snapshot) => {
    stream.innerHTML = ''; // Wipe older HTML placeholders

    snapshot.forEach((doc) => {
        const data = doc.data();
        const isOutgoing = data.sender === "River Daz";
        
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', isOutgoing ? 'outgoing' : 'incoming');

        let displayTime = "Just now";
        if (data.timestamp) {
            displayTime = data.timestamp.toDate().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        }

        messageDiv.innerHTML = `
            <div class="bubble">${data.text}</div>
            <span class="timestamp">${displayTime}</span>
        `;
        stream.appendChild(messageDiv);
    });
    stream.scrollTop = stream.scrollHeight; // Keep view scrolled down
});