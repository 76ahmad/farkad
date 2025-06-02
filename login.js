import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";

const firebaseConfig = {
  authDomain: "farkad-scheduler.firebaseapp.com",
  projectId: "farkad-scheduler",
  storageBucket: "farkad-scheduler.firebasestorage.app",
  messagingSenderId: "71149615141",
  appId: "1:71149615141:web:97eac63fe0c39d4831a7cc",
  measurementId: "G-41H0PK4LMR"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

window.register = () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("ההרשמה הצליחה");
      window.location.href = "index.html";
    })
    .catch((error) => {
      alert("שגיאה: " + error.message);
    });
};

window.login = () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("התחברת בהצלחה");
      window.location.href = "index.html";
    })
    .catch((error) => {
      alert("שגיאה: " + error.message);
    });
};

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("משתמש מחובר:", user.email);
  }
});

window.logout = () => {
  signOut(auth).then(() => {
    alert("התנתקת");
  });
};
