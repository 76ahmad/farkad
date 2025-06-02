import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

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
const db = getFirestore();

onAuthStateChanged(auth, async (user) => {
  if (!user) {
    window.location.href = "login.html";
    return;
  }

  const userRef = doc(db, "users", user.uid);
  const userSnap = await getDoc(userRef);

  if (!userSnap.exists() || !userSnap.data().paid) {
    alert("🚫 This account is not approved yet.");
    window.location.href = "login.html";
  }
});
