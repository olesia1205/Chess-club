import './index.css';

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


