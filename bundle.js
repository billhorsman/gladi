const colorScheme = document.querySelector('meta[name=color-scheme]');
let currentScheme = localStorage.getItem('color-scheme') || colorScheme.content;
colorScheme.content = currentScheme;
const schemeSwitcher = document.querySelector('.scheme-switcher');
const switchButton = schemeSwitcher.querySelector('button');
const hint = schemeSwitcher.querySelector('.hint');

schemeSwitcher.dataset.scheme = currentScheme;

function updateHint() {
  switch (currentScheme) {
    case 'light':
      hint.textContent = 'Light';
      break;
    case 'dark':
      hint.textContent = 'Dark';
      break;
    default:
      hint.textContent = 'Auto';
      break;
  }
}

updateHint();

const toggleScheme = () => {
  switch (currentScheme) {
    case 'light':
      currentScheme = 'dark';
      break;
    case 'dark':
      currentScheme = 'light dark';
      break;
    default:
      currentScheme = 'light';
      break;
  }
  colorScheme.content = currentScheme;
  schemeSwitcher.dataset.scheme = currentScheme;
  localStorage.setItem('color-scheme', currentScheme);
}

switchButton.addEventListener('click', () => {

  if (!document.startViewTransition) {
    toggleScheme();
    updateHint();
    return;
  }

  document.startViewTransition(() => {
    toggleScheme();
    updateHint();
  })
});
