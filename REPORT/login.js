const loginBtn = document.getElementById("login-btn");

const SHEET_ID = "1v6ikHuPtw114Kx16sjebd8965X4jaCccwRLsWwnImVU"; // ID de tu hoja
const API_KEY = "AIzaSyAhHPQBoavY5HnCvsVWtLtMWF37f3Hrfbk"; // Tu clave API
const SHEET_NAME = "Hoja1"; // Nombre de la pestaña

const SHEET_URL = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${SHEET_NAME}?key=${API_KEY}`;

loginBtn.addEventListener("click", () => {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!username || !password) {
    document.getElementById("error-message").textContent = "Por favor, ingresa usuario y contraseña.";
    return;
  }

  fetch(SHEET_URL)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error en la solicitud: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log("Respuesta de la API:", data);
      const rows = data.values || [];
      if (rows.length === 0) {
        throw new Error("No hay datos en la hoja de cálculo.");
      }

      const headers = rows[0];
      const userIndex = headers.indexOf("usuario");
      const passwordIndex = headers.indexOf("contraseña");

      if (userIndex === -1 || passwordIndex === -1) {
        throw new Error("Encabezados 'usuario' o 'contraseña' no encontrados.");
      }

      const user = rows.find(
        (row) =>
          row[userIndex] === username &&
          row[passwordIndex] === password
      );

      if (user) {
        console.log("Usuario autenticado:", username);
        window.location.href = "dashboard.html";
      } else {
        document.getElementById("error-message").textContent = "Usuario o contraseña incorrectos.";
      }
    })
    .catch((error) => {
      console.error("Error al conectar con Google Sheets:", error);
      document.getElementById("error-message").textContent =
        "Error al verificar los datos. Inténtalo nuevamente.";
    });
});