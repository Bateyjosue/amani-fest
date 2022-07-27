const menuHumberge = document.querySelector('.menu-humberger');
const nav = document.querySelector('nav');
const CloseMenu = document.querySelector('.close-menu');
const blurryBG = document.querySelector('section, footer') 

menuHumberge.addEventListener('click', () => {
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
    img: './images/roga.jpg'
  }
  ,
  {
    id: 'guest2',
    nam: 'Robinio',
    country: 'DRC',
    description: 'Mongala Akelembi aka Robinio Mundibu is a Congolese artist.',
    img: './images/robi.jpg'
  }
  ,
  {
    id: 'guest3',
    nam: 'Charly na Nina',
    country: 'Rwanda',
    description: 'Girl power for this Rwandan music group made up of 2 women',
    img: './images/nina.jpg'
  }
  ,
  {
    id: 'guest4',
    nam: 'Mohombi',
    country: 'Drc-Sweden',
    description: 'is a singer, dancer, producer, composer and author of pop and African music, born to a Congolese father and a Swedish mother.',
    img: './images/mohombi.jpeg'
  }
  ,
  {
    id: 'guest5',
    nam: 'W Malick',
    country: 'Drc-North-Kivu',
    description: 'is a Congolese artist from Butembo, where he started music with other friends.',
    img: './images/malick.jpg'
  }
  ,
  {
    id: 'guest6',
    nam: 'Alesh',
    country: 'Drc-Kinshasa',
    description: 'whose real name is Alain Chirwisa, is a Congolese musician, committed rapper and songwriter',
    img: './images/alesh.jpeg'
  }
]

const showMore = document.querySelector('#show-more');
const card = document.querySelector('.card');

guestInfo.forEach((element, index) => {
  card.innerHTML += `
    <li class="">
      <div class="img-card">
        <img class="profile" src="${element.img}" alt="${element.id}" height="" width="">
      </div>
      <div class="body-card">
        <h3>${element.nam}</h3>
        <h6>
          <small>COUNTRY:</small> ${element.country}
        </h6>
        <hr>
        <p>
        ${element.description}
        </p>
      </div>
    </li>
  `;
});

const cards = document.querySelectorAll('.card li');

showMore.addEventListener('click', () => {
  if(showMore.innerText === 'LESS'){
    showMore.innerText = 'MORE';
    cards.forEach((element, index) => {
      if (index >= 2) {
        element.classList.add('hide-card');
      }
    });
  }
  else {
    showMore.innerText = 'LESS';
    cards.forEach((element, index) => {
      if (index >= 2) {
        element.classList.remove('hide-card');
      }
    });
  }
});