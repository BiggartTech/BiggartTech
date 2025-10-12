// Replace these when you send me the real links:
const APPLE_STORE_URL = '#'; // e.g., 'https://apps.apple.com/app/...'
const GOOGLE_PLAY_URL = '#'; // e.g., 'https://play.google.com/store/apps/details?id=...'

// Apply links safely
const appleLink = document.getElementById('appleLink');
const googleLink = document.getElementById('googleLink');
if (appleLink && APPLE_STORE_URL && APPLE_STORE_URL !== '#') appleLink.href = APPLE_STORE_URL;
if (googleLink && GOOGLE_PLAY_URL && GOOGLE_PLAY_URL !== '#') googleLink.href = GOOGLE_PLAY_URL;

// Optional keyboard-focus helpers
document.querySelectorAll('.store-card').forEach(card => {
  card.addEventListener('focus', () => card.classList.add('focus'));
  card.addEventListener('blur', () => card.classList.remove('focus'));
});

