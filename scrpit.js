// Replace these when you send me the real links:
const APPLE_STORE_URL = '#'; // e.g., 'https://apps.apple.com/app/...'
const GOOGLE_PLAY_URL = '#'; // e.g., 'https://play.google.com/store/apps/details?id=...'

// Apply links safely
const appleLink = document.getElementById('appleLink');
const googleLink = document.getElementById('googleLink');
if (appleLink && APPLE_STORE_URL && APPLE_STORE_URL !== '#') appleLink.href = APPLE_STORE_URL;
if (googleLink && GOOGLE_PLAY_URL && GOOGLE_PLAY_URL !== '#') googleLink.href = GOOGLE_PLAY_URL;

// Optional keyboard-focus helpers for accessibility
document.querySelectorAll('.store-card').forEach(card => {
  card.addEventListener('focus', () => card.classList.add('focus'));
  card.addEventListener('blur', () => card.classList.remove('focus'));
});

// Set current year in footer dynamically
const yearSpan = document.getElementById('currentYear');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      e.preventDefault();
      // Offset for sticky navbar
      const navbarHeight = document.querySelector('.navbar').offsetHeight;
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
      
      // Close mobile menu if open
      const navbarCollapse = document.getElementById('navbarNav');
      if (navbarCollapse.classList.contains('show')) {
        const bsCollapse = new bootstrap.Collapse(navbarCollapse);
        bsCollapse.hide();
      }
    }
  });
});
