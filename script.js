// Form Submission Handling
document.getElementById('lead-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const successMessage = document.getElementById('success-message');
  const form = document.getElementById('lead-form');

  // Simulate form submission (e.g., API call)
  setTimeout(() => {
    // Hide form and show success message
    form.style.display = 'none';
    successMessage.classList.add('visible');

    // Reset form and UI after 3 seconds
    setTimeout(() => {
      form.style.display = 'flex';
      successMessage.classList.remove('visible');
      form.reset(); // Reset form fields
    }, 3000);
  }, 500); // Simulate a slight delay for "processing"
});

// GSAP Scroll Animations
gsap.registerPlugin(ScrollTrigger);

const animateOnScroll = (selector, options) => {
  gsap.from(selector, {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
      trigger: selector,
      start: 'top 80%',
      end: 'bottom 20%',
      toggleActions: 'play none none none',
    },
    ...options,
  });
};

animateOnScroll('.hero-content');
animateOnScroll('.card', { trigger: '.value-proposition' });
animateOnScroll('.service-card', { trigger: '.services' });
animateOnScroll('.testimonial', { trigger: '.testimonials' });

// Custom Cursor Interaction
const cursor = document.createElement('div');
cursor.classList.add('custom-cursor');
document.body.appendChild(cursor);

const updateCursor = (e) => {
  cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
};

const handleHover = (elements, className) => {
  elements.forEach((element) => {
    element.addEventListener('mouseenter', () => cursor.classList.add(className));
    element.addEventListener('mouseleave', () => cursor.classList.remove(className));
  });
};

document.addEventListener('mousemove', updateCursor);

handleHover(document.querySelectorAll('a, button, input, textarea'), 'hover');

// Optional: Add a click animation to the cursor
document.addEventListener('click', () => {
  cursor.classList.add('click');
  setTimeout(() => cursor.classList.remove('click'), 200);
});

// Hero Section Animation
gsap.from('.hero-content', {
  opacity: 0,
  y: 50,
  duration: 1.5,
  ease: 'power3.out',
  delay: 0.5, // Delay the animation slightly
});

gsap.from('.hero h1', {
  opacity: 0,
  y: 30,
  duration: 1,
  ease: 'power3.out',
  delay: 1, // Delay the title animation
});

gsap.from('.hero p', {
  opacity: 0,
  y: 30,
  duration: 1,
  ease: 'power3.out',
  delay: 1.5, // Delay the subtitle animation
});

gsap.from('.cta-button', {
  opacity: 0,
  y: 30,
  duration: 1,
  ease: 'power3.out',
  delay: 2, // Delay the button animation
});