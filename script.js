const modeToggle = document.getElementById('modeToggle');

function toggleDarkMode() {
  document.documentElement.classList.toggle('dark-mode');
}

modeToggle.addEventListener('click', toggleDarkMode);
