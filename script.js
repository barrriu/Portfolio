// Dark Mode Toggle
const toggle = document.getElementById('dark-mode-toggle');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

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
  document.getElementById('preloader').style.display = 'none';
});

// GSAP Scroll Animation
gsap.utils.toArray('.section').forEach(section => {
  gsap.from(section, {
    scrollTrigger: section,
    opacity: 0,
    y: 50,
    duration: 1
  });
});
