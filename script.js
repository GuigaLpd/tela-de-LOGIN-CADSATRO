import app from "./script-firebase.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";

class Auth {
  #auth;
  constructor() { this.#auth = getAuth(app); }

  criarUsuario(email, senha) {
    return createUserWithEmailAndPassword(this.#auth, email, senha);
  }

  entrar(email, senha) {
    return signInWithEmailAndPassword(this.#auth, email, senha);
  }

  sair() {
    return signOut(this.#auth);
  }

  aoMudar(callback) {
    return onAuthStateChanged(this.#auth, callback);
  }
}

export default new Auth();
// ...existing code...