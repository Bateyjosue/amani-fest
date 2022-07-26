const menuHumberge = document.querySelector('.menu-humberger');
const nav = document.querySelector('nav');
const CloseMenu = document.querySelector('.close-menu');

menuHumberge.addEventListener('click', () => {
  nav.style.visibility = 'visible';
});