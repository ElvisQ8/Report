// Carga los scripts de Firebase desde el CDN
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC3S5RZozpPTlPsE5hGB5VD_7WymPc5LnM",
  authDomain: "cerrolindo-7dc37.firebaseapp.com",
  databaseURL: "https://cerrolindo-7dc37-default-rtdb.firebaseio.com",
  projectId: "cerrolindo-7dc37",
  storageBucket: "cerrolindo-7dc37.firebasestorage.app",
  messagingSenderId: "534924052714",
  appId: "1:534924052714:web:59e054ec8df78323aaaf93",
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Exportar la base de datos
export { database };