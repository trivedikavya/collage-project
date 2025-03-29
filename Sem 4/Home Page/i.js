// DOM Elements
const modeToggle = document.getElementById('modeToggle');
const modeToggleMobile = document.getElementById('modeToggleMobile');
const menuToggle = document.getElementById('menuToggle');
const mobileNav = document.getElementById('mobileNav');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
const body = document.body;
const popup = document.getElementById('popup');

// Toggle Dark/Light Mode
function toggleMode() {
  if (body.classList.contains('dark-mode')) {
    body.classList.remove('dark-mode');
    modeToggle.innerHTML = '<i class="fas fa-moon"></i><span>Dark Mode</span>';
    modeToggleMobile.innerHTML = '<i class="fas fa-moon"></i>';
  } else {
    body.classList.add('dark-mode');
    modeToggle.innerHTML = '<i class="fas fa-sun"></i><span>Light Mode</span>';
    modeToggleMobile.innerHTML = '<i class="fas fa-sun"></i>';
  }
}

// Toggle Mobile Menu
function toggleMenu() {
  mobileNav.classList.toggle('active');
  
  if (mobileNav.classList.contains('active')) {
    menuToggle.innerHTML = '<i class="fas fa-times"></i>';
  } else {
    menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
  }
}

// Close Mobile Menu when a link is clicked
function closeMobileMenu() {
  mobileNav.classList.remove('active');
  menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
}

// Show Login Popup
function showPopup() {
  popup.style.display = 'flex';
}

// Close Login Popup
function closePopup() {
  popup.style.display = 'none';
}

// Redirect to Login Page
function redirectToLogin() {
  alert('Redirecting to Login Page...');
  closePopup();
  // Replace with actual login URL
  // window.location.href = '/login';
}

// Animate Counters
function animateCounters() {
  const counters = document.querySelectorAll(".num");
  const duration = 5000; // Animation duration in milliseconds
  const interval = 100; // Update interval in milliseconds
  
  counters.forEach(counter => {
    const target = +counter.getAttribute('data-val');
    let count = 0;
    const increment = target / (duration / interval);
    
    const timer = setInterval(() => {
      count += increment;
      
      if (count >= target) {
        counter.innerText = target.toLocaleString();
        clearInterval(timer);
      } else {
        counter.innerText = Math.ceil(count).toLocaleString();
      }
    }, interval);
  });
}

// Intersection Observer for Sections
function setupIntersectionObserver() {
  const sections = document.querySelectorAll("section");
  
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          
          // Start counter animation when features section is visible
          if (entry.target.id === 'features') {
            animateCounters();
          }
        }
      });
    },
    { threshold: 0.1 }
  );
  
  sections.forEach((section) => {
    observer.observe(section);
  });
}

// Close popup when clicking outside
window.onclick = function(event) {
  if (event.target === popup) {
    closePopup();
  }
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
  modeToggle.addEventListener('click', toggleMode);
  modeToggleMobile.addEventListener('click', toggleMode);
  menuToggle.addEventListener('click', toggleMenu);
  
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });
  
  setupIntersectionObserver();
});