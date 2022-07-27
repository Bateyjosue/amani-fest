const menuHumberge = document.querySelector('.menu-humberger');
const nav = document.querySelector('nav');
const CloseMenu = document.querySelector('.close-menu');

menuHumberge.addEventListener('click', () => {
  nav.style.visibility = 'visible';
  nav.style.display = 'block';
});

CloseMenu.addEventListener('click', () => {
  nav.style.visibility = 'hidden';
  nav.style.display = 'none';
});

const guestInfo = [
  {
    id: 'guest1',
    nam: 'Roga Roga',
    country: 'Congo-Brazza',
    description: 'Real name Ibambi Okombi Rogatien is a 48-year-old Congolese singer.',
    img: './images.roga,jpg'
  }
]