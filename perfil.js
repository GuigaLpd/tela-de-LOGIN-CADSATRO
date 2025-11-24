import Auth from "./script.js";

const emailField = document.getElementById('user-email');
const logoutBtn = document.getElementById('btn-logout');

if (emailField && logoutBtn) {
  Auth.aoMudar((user) => {
    if (user) {
      emailField.textContent = 'Email: ' + (user.email || '');
    } else {
      location.href = 'index.html';
    }
  });

  logoutBtn.addEventListener('click', async () => {
    await Auth.sair();
    location.href = 'index.html';
  });
} else {
  location.href = 'index.html';
}