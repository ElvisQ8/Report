import { auth, database } from "./firebase-config.js";
import { onAuthStateChanged } from "firebase/auth";
import { ref, get } from "firebase/database";

onAuthStateChanged(auth, (user) => {
  if (user) {
    const userRef = ref(database, "users/" + user.uid);
    get(userRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          console.log("Bienvenido:", snapshot.val().username);
        } else {
          alert("No tienes datos registrados.");
          window.location.href = "index.html";
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  } else {
    window.location.href = "index.html"; // Redirige si no está logueado
  }
});