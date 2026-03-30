// firebase.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAoVpMhKjVdK5cBa7smq5DfDeGxyxWFt2w",
  authDomain: "agendaonline-5fabc.firebaseapp.com",
  projectId: "agendaonline-5fabc",
  storageBucket: "agendaonline-5fabc.firebasestorage.app",
  messagingSenderId: "970467167033",
  appId: "1:970467167033:web:c7ccde1864d2ad2c29f6e8"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };