import Auth from "./script.js";

const form = document.getElementById('form-login');
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value.trim();
  const senha = document.getElementById('senha').value;
  try {
    await Auth.entrar(email, senha);
    location.href = 'perfil.html';
  } catch (err) {
    alert('Erro no login: ' + (err.message || err));
  }
});