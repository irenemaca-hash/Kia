const text = [
  'To my dearest palangga,',
  'I hope you know how special you are to me. Your presence in my life brings so much joy and warmth.',
  'I promise to always be there for you, through thick and thin, and to support you in every way I can.',
  'I love you more than words can express, and I am grateful for every moment we share together.',
  'I love you soooo muchhhh, mwaaaamwaaaaa 😘',
];

const letterText = document.getElementById('letter-text');
const backgroundMusic = document.getElementById('backgroundMusic');
let currentLine = 0;

function renderLetter() {
  const line = text[currentLine];
  letterText.innerHTML = `<span class="line">${line}</span>`;
}

setInterval(() => {
  currentLine = (currentLine + 1) % text.length;
  renderLetter();
}, 7000);

async function startBackgroundMusic() {
  if (!backgroundMusic || !backgroundMusic.paused) return;

  backgroundMusic.muted = false;
  backgroundMusic.volume = 1;
  try {
    await backgroundMusic.play();
  } catch (error) {
    console.error('Unable to autoplay background music until the page is interacted with.', error);
  }
}

startBackgroundMusic();
document.addEventListener('pointerdown', startBackgroundMusic, { once: true });

backgroundMusic?.addEventListener('error', () => {
  console.error('Unable to load the background music. Open this page through a local web server.');
});

renderLetter();
