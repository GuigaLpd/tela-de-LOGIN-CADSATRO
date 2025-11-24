import Auth from "./script.js";

const form = document.getElementById('form-registro');
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value.trim();
  const senha = document.getElementById('senha').value;
  try {
    await Auth.criarUsuario(email, senha); // usar criarUsuario conforme script.js
    location.href = 'perfil.html';
  } catch (err) {
    alert('Erro no cadastro: ' + (err.message || err));
  }
});