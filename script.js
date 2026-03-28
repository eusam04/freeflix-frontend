const themeToggleButton = document.getElementById('theme-toggle');
const rootBody = document.body;

const Theme = {
  LIGHT: 'light',
  DARK: 'dark'
};

function getStoredTheme() {
  return localStorage.getItem('netflix-theme');
}

function setStoredTheme(theme) {
  localStorage.setItem('netflix-theme', theme);
}

function applyTheme(theme) {
  if (theme === Theme.LIGHT) {
    rootBody.classList.add('light-mode');
    themeToggleButton.textContent = '🌙';
  } else {
    rootBody.classList.remove('light-mode');
    themeToggleButton.textContent = '☀️';
  }
}

function getPreferredTheme() {
  const storedTheme = getStoredTheme();
  if (storedTheme) {
    return storedTheme;
  }

  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  return prefersDark ? Theme.DARK : Theme.LIGHT;
}

function toggleTheme() {
  const isLight = rootBody.classList.contains('light-mode');
  const nextTheme = isLight ? Theme.DARK : Theme.LIGHT;
  applyTheme(nextTheme);
  setStoredTheme(nextTheme);
}

themeToggleButton.addEventListener('click', toggleTheme);

// inicializa tema na carga
applyTheme(getPreferredTheme());

// Armazenar perfil ativo no localStorage
const profileLinks = document.querySelectorAll('.perfil-1, .perfil-2, .perfil-3');

profileLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const figcaption = link.querySelector('figcaption');
        const img = link.querySelector('img');
        const name = figcaption.textContent;
        const image = "../" + img.getAttribute('src');
        
        localStorage.setItem('perfilAtivoNome', name);
        localStorage.setItem('perfilAtivoImagem', image);
    });
});


