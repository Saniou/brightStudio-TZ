let timer = 90; 
const timerDisplay = document.getElementById('timer');
const header1 = document.getElementById('header1');
const header2 = document.getElementById('header2');
const footer1 = document.getElementById('footer1');
const footer2 = document.getElementById('footer2');

const scrollTopBtn = document.getElementById('scrollTop');
scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

function updateTimer() {
  const minutes = Math.floor(timer / 60).toString().padStart(2, '0');
  const seconds = (timer % 60).toString().padStart(2, '0');
  timerDisplay.textContent = `${minutes}:${seconds}`;
}

function switchHeadersAndFooters() {
  header1.classList.toggle('hidden');
  header2.classList.toggle('hidden');
  footer1.classList.toggle('hidden');
  footer2.classList.toggle('hidden');
}

function countdown() {
  if (timer > 0) {
    timer--;
    updateTimer();
  } else {
    timer = 90; 
    switchHeadersAndFooters();
  }
}

updateTimer();
setInterval(countdown, 1000);