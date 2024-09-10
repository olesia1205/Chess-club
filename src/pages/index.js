import './index.css';
import { cardData } from '../assets/constants';
import { membersData } from '../assets/constants';

// Отрисовка карточек в секции stages для десктопа
document.addEventListener('DOMContentLoaded', function() {
  const stagesList = document.getElementById('stagesList');
  const cardTemplate = document.getElementById('cardTemplate').content;

  cardData.forEach(card => {
    const cardClone = document.importNode(cardTemplate, true);
    const numberElement = cardClone.querySelector('.stages__card-number');
    const descriptionElement = cardClone.querySelector('.stages__card-description');

    numberElement.textContent = card.number;
    descriptionElement.textContent = card.description;
    stagesList.appendChild(cardClone);
  });

  const cardsArr = document.querySelectorAll('.stages__card');
  cardsArr.forEach((el, index) => {
    el.classList.add(`stages__card${index + 1}`);
  });
});

// Отрисовка карточек в секции stages для мобильной версии, логика работы пагинатора
document.addEventListener('DOMContentLoaded', function() {
  const cards = document.querySelectorAll('.stages__card-mobile');
  const prevButton = document.querySelector('.pagination__button-prev');
  const nextButton = document.querySelector('.pagination__button-next');
  const pointsContainer = document.querySelector('.pagination__points');

  let currentIndex = 0;

  function createPaginationPoints() {
    cards.forEach((_, index) => {
      const point = document.createElement('div');
      point.classList.add('pagination__point');
      if (index === currentIndex) {
        point.classList.add('active');
      }
      pointsContainer.appendChild(point);
    });
  };

  function updateCards() {
    cards.forEach((card, index) => {
      card.classList.remove('active');
    });
    cards[currentIndex].classList.add('active');

    const points = document.querySelectorAll('.pagination__point');
    points.forEach((point, index) => {
      point.classList.remove('active');
      if (index === currentIndex) {
        point.classList.add('active');
      }
    });
  };

  prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = cards.length - 1;
    }
    updateCards();
  });

  nextButton.addEventListener('click', () => {
    if (currentIndex < cards.length - 1) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    updateCards();
  });

  createPaginationPoints();
  updateCards();
});

// Отрисовка карточек участников турнира и логика работы пагинатора
document.addEventListener('DOMContentLoaded', function() {
  const membersContainer = document.getElementById('membersContainer');
  const cardTemplate = document.getElementById('memberCard').content;
  const prevButton = document.querySelector('.members__pagination-button_prev');
  const nextButton = document.querySelector('.members__pagination-button_next');
  const currentCounter = document.querySelector('.members__counter-current');
  const totalCounter = document.querySelector('.members__counter-total');

  membersData.forEach(card => {
    const cardClone = document.importNode(cardTemplate, true);
    const nameElement = cardClone.querySelector('.members__member-name');
    const titleElement = cardClone.querySelector('.members__member-title');

    nameElement.textContent = card.name;
    titleElement.textContent = card.title;
    membersContainer.appendChild(cardClone);
  });

  const cards = document.querySelectorAll('.members__card');
  const totalCards = cards.length;

  let currentIndex = 0;

  function getCardsPerPage() {
    if (window.innerWidth >= 1366) {
      return 3;
    } else if (window.innerWidth >= 952) {
      return 2;
    } else {
      return 1;
    };
  };

  function updateCards() {
    const cardsPerPage = getCardsPerPage();
    cards.forEach(card => card.style.display = 'none');

    for (let i = 0; i < cardsPerPage; i++) {
      const cardToShow = (currentIndex + i) % totalCards;
      cards[cardToShow].style.display = 'flex';
    }

    const firstCardDisplayed = currentIndex + 1;
    currentCounter.textContent = firstCardDisplayed;
    totalCounter.textContent = totalCards;
  };

  prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalCards) % totalCards;
    updateCards();
  });

  nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalCards;
    updateCards();
  });

  setInterval(() => {
    currentIndex = (currentIndex + 1) % totalCards;
    updateCards();
  }, 4000);

  updateCards();
});

// Добавление бегущей строки в подвале
document.addEventListener('DOMContentLoaded', function() {
  const runningLine = document.querySelector('.running-line');
  const footerText = document.querySelector('.footer__text');
  const footer = document.querySelector('.footer');

  if (runningLine && footerText && footer) {
    const clonedRunningLine = runningLine.cloneNode(true);
    footer.insertBefore(clonedRunningLine, footerText);
    clonedRunningLine.classList.add('footer-line');
  } else {
    console.error('One of the elements was not found')
  }
});
