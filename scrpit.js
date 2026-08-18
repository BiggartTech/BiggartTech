Here is the complete, expanded code based on your foundation.

To turn this into a fully functional tech landing page, I added a **Features** section, an **About Us** section, and a **Footer** with contact information. I also updated the navigation bar to include links to these new sections and added a smooth-scrolling effect in the JavaScript.

### `index.html`

Replace your existing HTML with this expanded version.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Biggart Tech Solutions</title>

  <!-- Bootstrap 5 -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" />
  <!-- Bootstrap Icons -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">

  <!-- Site CSS -->
  <link href="style.css" rel="stylesheet" />
</head>
<body>
  <!-- NAVBAR -->
  <nav class="navbar navbar-expand-lg navbar-light bg-white border-bottom sticky-top">
    <div class="container">
      <a class="navbar-brand fw-bold" href="#">Biggart Tech Solutions</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link" href="#features">Features</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#about">About Us</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <!-- HERO -->
  <main class="container py-5 hero-wrapper text-center">
    <h1 class="display-5 fw-bold mb-3">Innovating Your Digital Future</h1>
    <p class="lead text-muted mb-4">Powerful, scalable tech solutions right at your fingertips.</p>
    <!-- Replace the src below with your new banner image URL or a local filename -->
    <img
      src="BTS-hero-banner.png"
      alt="Biggart Tech Solutions banner"
      class="hero-img mb-5"
      onerror="this.onerror=null; this.src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAABCAYAAABl0Vt4AAAACXBIWXMAAAsSAAALEgHS3X78AAAADUlEQVQImWP4z8DAwMAgAAE3AQk4VfPzAAAAAElFTkSuQmCC';"
    />

    <!-- STORE BUTTONS -->
    <div class="row g-3 justify-content-center pb-5">
      <div class="col-12 col-sm-auto d-flex justify-content-center">
        <a class="store-card text-decoration-none" href="#" target="_blank" rel="noopener" id="appleLink" aria-label="Download on the App Store">
          <img class="store-badge" src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="Download on the App Store" />
        </a>
      </div>
      <div class="col-12 col-sm-auto d-flex justify-content-center">
        <a class="store-card text-decoration-none" href="#" target="_blank" rel="noopener" id="googleLink" aria-label="Get it on Google Play">
          <img class="store-badge" src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" />
        </a>
      </div>
    </div>
  </main>

  <!-- FEATURES SECTION -->
  <section id="features" class="bg-light py-5">
    <div class="container py-4">
      <div class="text-center mb-5">
        <h2 class="fw-bold">Why Choose Biggart?</h2>
        <p class="text-muted">Built for performance, designed for you.</p>
      </div>
      <div class="row g-4">
        <!-- Feature 1 -->
        <div class="col-md-4">
          <div class="feature-card text-center bg-white h-100">
            <i class="bi bi-cloud-arrow-up feature-icon"></i>
            <h4 class="fw-bold mt-3">Cloud Integration</h4>
            <p class="text-muted">Seamlessly sync your data across all devices with our lightning-fast, secure cloud infrastructure.</p>
          </div>
        </div>
        <!-- Feature 2 -->
        <div class="col-md-4">
          <div class="feature-card text-center bg-white h-100">
            <i class="bi bi-shield-check feature-icon"></i>
            <h4 class="fw-bold mt-3">Enterprise Security</h4>
            <p class="text-muted">Bank-grade encryption ensures your sensitive business data stays protected 24/7.</p>
          </div>
        </div>
        <!-- Feature 3 -->
        <div class="col-md-4">
          <div class="feature-card text-center bg-white h-100">
            <i class="bi bi-speedometer2 feature-icon"></i>
            <h4 class="fw-bold mt-3">High Performance</h4>
            <p class="text-muted">Optimized code and streamlined processes mean zero lag, no matter how heavy the workload.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ABOUT SECTION -->
  <section id="about" class="container py-5">
    <div class="row align-items-center py-4">
      <div class="col-md-6 mb-4 mb-md-0">
        <div class="bg-light rounded-3 p-5 text-center h-100 d-flex align-items-center justify-content-center">
          <i class="bi bi-laptop text-secondary" style="font-size: 6rem;"></i>
        </div>
      </div>
      <div class="col-md-6 px-md-5">
        <h2 class="fw-bold mb-4">About Biggart Tech Solutions</h2>
        <p class="text-muted mb-4">We are a forward-thinking technology company dedicated to building applications that make a difference. From intuitive user interfaces to robust backend architectures, we craft digital experiences that empower businesses and individuals alike.</p>
        <p class="text-muted">Founded on the principles of innovation and reliability, our mission is to simplify the complex world of technology into accessible, scalable tools for your everyday success.</p>
      </div>
    </div>
  </section>

  <!-- FOOTER -->
  <footer id="contact" class="bg-dark text-white py-5">
    <div class="container">
      <div class="row g-4">
        <div class="col-md-6">
          <h4 class="fw-bold mb-3">Biggart Tech Solutions</h4>
          <p class="text-secondary">Innovating your digital future, one line of code at a time.</p>
        </div>
        <div class="col-md-3">
          <h5 class="mb-3">Quick Links</h5>
          <ul class="list-unstyled">
            <li><a href="#features" class="footer-link">Features</a></li>
            <li><a href="#about" class="footer-link">About Us</a></li>
            <li><a href="#" class="footer-link">Privacy Policy</a></li>
            <li><a href="#" class="footer-link">Terms of Service</a></li>
          </ul>
        </div>
        <div class="col-md-3">
          <h5 class="mb-3">Contact Us</h5>
          <ul class="list-unstyled text-secondary">
            <li><i class="bi bi-envelope me-2"></i> hello@biggarttech.com</li>
            <li><i class="bi bi-telephone me-2"></i> 1 (800) 555-0199</li>
            <li class="mt-3">
              <a href="#" class="text-white me-3 fs-5"><i class="bi bi-twitter-x"></i></a>
              <a href="#" class="text-white me-3 fs-5"><i class="bi bi-linkedin"></i></a>
              <a href="#" class="text-white fs-5"><i class="bi bi-github"></i></a>
            </li>
          </ul>
        </div>
      </div>
      <hr class="border-secondary mt-4 mb-3">
      <div class="text-center text-secondary small">
        &copy; <span id="currentYear"></span> Biggart Tech Solutions. All rights reserved.
      </div>
    </div>
  </footer>

  <!-- Bootstrap + App JS -->
  <script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
  <script defer src="app.js"></script>
</body>
</html>

```

---

### `style.css`

Append these new rules to your existing CSS file.

```css
/* Base */
body { background-color: #ffffff; color: #0b0d12; scroll-behavior: smooth; }

/* NAV */
.navbar { box-shadow: 0 0.25rem 0.75rem rgba(0,0,0,.05); }
.navbar .navbar-brand { font-size: 1.25rem; letter-spacing: .02em; }

/* HERO */
.hero-wrapper { min-height: auto; }
.hero-img {
  display: block;
  margin: 0 auto;
  width: 100%;
  max-width: 1000px;
  height: auto;
  max-height: 65vh;
  object-fit: contain;
  background: #ffffff;
  border-radius: 1rem;
  box-shadow: 0 1rem 3rem rgba(0,0,0,.10);
}

/* STORE BUTTONS (200 x 59.29, uniform) */
.store-card {
  background: #f8f9fa;
  border: 1px solid rgba(0,0,0,0.08);
  border-radius: 12px;
  padding: 0;
  transition: transform .18s ease, box-shadow .18s ease, border-color .18s ease;
  display: block;
  width: 200px;
  height: 59.29px; /* exact size */
  overflow: hidden;
}
.store-card:hover, .store-card.focus {
  transform: translateY(-3px);
  box-shadow: 0 0.5rem 1.5rem rgba(0,0,0,.15);
  border-color: rgba(0,0,0,0.18);
}
.store-badge {
  width: 100%;
  height: 100%;
  object-fit: cover; /* fills the button area */
  display: block;
}

/* NEW: FEATURES SECTION */
.feature-card {
  padding: 2.5rem 1.5rem;
  border-radius: 16px;
  border: 1px solid rgba(0,0,0,0.05);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 1rem 2.5rem rgba(0,0,0,.08);
}
.feature-icon {
  font-size: 3rem;
  color: #0d6efd; /* Bootstrap primary blue */
}

/* NEW: FOOTER */
.footer-link {
  color: #6c757d;
  text-decoration: none;
  transition: color 0.2s ease;
}
.footer-link:hover {
  color: #ffffff;
}

/* Utilities */
.spacer { height: 24px; }

/* Small screens: scale buttons down proportionally, keep aspect ratio */
@media (max-width: 576px) {
  .hero-img { max-height: 40vh; border-radius: .75rem; }
  .store-card {
    width: 70vw;
    max-width: 200px;
    height: calc(70vw * (59.29 / 200));
  }
}

```

---

### `app.js`

Replace your existing JavaScript with this version. It retains your focus helpers and URL logic but adds functionality for the smooth-scrolling navbar and automatic copyright year.

```javascript
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

```
