import { initializeApp } from "https://www.gstatic.com/firebasejs/9/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9/firebase-auth.js";

// ESSES DADOS VOCÊ PEGA NO CONSOLE DO FIREBASE (Configurações do Projeto > Seus Aplicativos)
const firebaseConfig = {
  apiKey: "SUA_API_KEY_AQUI",
  authDomain: "seu-projeto.firebaseapp.com",
  projectId: "seu-projeto-id",
  storageBucket: "seu-projeto.appspot.com",
  messagingSenderId: "seu-numero-id",
  appId: "seu-app-id"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Exporta as conexões para usar no admin.js e no app.js
export const db = getFirestore(app);
export const auth = getAuth(app);
