const themeToggleBtn = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

function applyTheme(theme) {
  if (theme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeIcon.textContent = 'light_mode';
    themeToggleBtn.setAttribute('aria-label', 'Switch to light theme');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.removeAttribute('data-theme');
    themeIcon.textContent = 'dark_mode';
    themeToggleBtn.setAttribute('aria-label', 'Switch to dark theme');
    localStorage.setItem('theme', 'light');
  }
}

// Initialize theme on page load
(function initTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark' || (!savedTheme && userPrefersDark)) {
    applyTheme('dark');
  } else {
    applyTheme('light');
  }
})();

themeToggleBtn.addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  if (currentTheme === 'dark') {
    applyTheme('light');
  } else {
    applyTheme('dark');
  }
});
