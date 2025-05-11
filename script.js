// Dark Mode Toggle
const toggle = document.getElementById('dark-mode-toggle');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
  toggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

// Check for saved dark mode preference
if (localStorage.getItem('darkMode') === 'true') {
  document.body.classList.add('dark-mode');
  toggle.textContent = '☀️';
}

// Scroll To Top Button
const scrollToTopBtn = document.getElementById('scrollToTopBtn');
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
});
scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Preloader
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  gsap.to(preloader, {
    opacity: 0,
    duration: 0.5,
    onComplete: () => preloader.style.display = 'none'
  });
});

// GSAP Scroll Animation
gsap.utils.toArray('.section').forEach(section => {
  gsap.from(section, {
    scrollTrigger: {
      trigger: section,
      start: "top 80%"
    },
    opacity: 0,
    y: 50,
    duration: 0.8
  });
});

// Animate elements on load
document.addEventListener('DOMContentLoaded', () => {
  gsap.from('.hero-content', { opacity: 0, y: 30, duration: 1, delay: 0.3 });
  gsap.from('.profile-photo', { scale: 0.8, opacity: 0, duration: 1, delay: 0.5 });
  gsap.from('.photo-frame', { scale: 0.8, opacity: 0, duration: 1, delay: 0.7 });
  gsap.from('.social-icons a', { 
    opacity: 0, 
    y: 20, 
    duration: 0.5, 
    stagger: 0.1,
    delay: 1
  });
});
