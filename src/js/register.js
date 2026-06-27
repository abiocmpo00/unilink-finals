import { db } from './firebase-config.js';
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const registerForm = document.querySelector('.auth-form');

if (registerForm) {
    registerForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const name = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        
        try {
            // Save user to a "users" collection in Firestore
            await addDoc(collection(db, "users"), {
                fullName: name,
                email: email,
                role: "student", // Default role
                createdAt: new Date()
            });
            
            // Redirect to dashboard after saving successfully
            window.location.href = "dashboard.html";
        } catch (error) {
            console.error("Error saving user: ", error);
            alert("Registration failed. Check your console.");
        }
    });
}