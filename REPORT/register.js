import { auth, database } from "./firebase-config.js";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, set } from "firebase/database";

const registerBtn = document.getElementById("register-btn");

registerBtn.addEventListener("click", () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const username = document.getElementById("username").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      // Guardar información del usuario en la base de datos
      set(ref(database, "users/" + user.uid), {
        username: username,
        email: email,
      });
      alert("Registro exitoso");
      window.location.href = "dashboard.html";
    })
    .catch((error) => {
      alert(error.message);
    });
});