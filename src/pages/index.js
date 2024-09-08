import './index.css';
import { cardData } from '../assets/constants';

document.addEventListener('DOMContentLoaded', function() {
  const stagesList = document.getElementById('stagesList');
  const cardTemplate = document.getElementById('cardTemplate').content;

  cardData.forEach(card => {
    const cardClone = document.importNode(cardTemplate, true);
    const numberElement = cardClone.querySelector('.stages__card-number');
    const descriptionElement = cardClone.querySelector('.stages__card-description');

    numberElement.textContent = `${card.number}`;
    descriptionElement.textContent = card.description;
    stagesList.appendChild(cardClone);
  });

  const cardsArr = document.querySelectorAll('.stages__card');
  cardsArr.forEach((el, index) => {
    el.classList.add(`stages__card${index + 1}`);
  });
});

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


