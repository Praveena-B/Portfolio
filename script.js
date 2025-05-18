// Reveal timeline items on scroll
const items = document.querySelectorAll('.timeline-item');

function revealItems() {
  const triggerBottom = window.innerHeight * 0.85;

  items.forEach(item => {
    const itemTop = item.getBoundingClientRect().top;

    if(itemTop < triggerBottom) {
      item.classList.add('show');
    } else {
      item.classList.remove('show');
    }
  });
}

window.addEventListener('scroll', revealItems);
window.addEventListener('load', revealItems);

// Select all profile pic containers
const profileContainers = document.querySelectorAll('.profile-pic-container');

// Reveal on scroll with staggered delays
function revealProfiles() {
  const triggerBottom = window.innerHeight * 0.85;

  profileContainers.forEach((container, index) => {
    const top = container.getBoundingClientRect().top;

    if (top < triggerBottom) {
      // Add show class to fade in
      container.classList.add('show');

      // Set staggered animation delay based on index (e.g., 0.2s step)
      container.style.animationDelay = `${index * 0.2}s`;
    } else {
      container.classList.remove('show');
      container.style.animationDelay = '0s';
    }
  });
}

window.addEventListener('scroll', revealProfiles);
window.addEventListener('load', revealProfiles);

