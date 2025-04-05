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
  delay: 0.5,
});

gsap.from('.hero h1', {
  opacity: 0,
  y: 30,
  duration: 1,
  ease: 'power3.out',
  delay: 1,
});

gsap.from('.hero p', {
  opacity: 0,
  y: 30,
  duration: 1,
  ease: 'power3.out',
  delay: 1.5,
});

gsap.from('.cta-button', {
  opacity: 0,
  y: 30,
  duration: 1,
  ease: 'power3.out',
  delay: 2,
});

// ==== Website Sign-Up Form Logic ====
document.addEventListener("DOMContentLoaded", () => {
  const signupForm = document.getElementById("lead-form");
  const successMessage = document.getElementById("success-message");

  if (signupForm) {
    signupForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      const data = {
        name: signupForm.name.value.trim(),
        email: signupForm.email.value.trim(),
        message: signupForm.message.value.trim()
      };

      try {
        const response = await fetch("https://thinksmart-api.onrender.com/api/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data)
        });

        const result = await response.json();

        if (response.ok) {
          signupForm.reset();
          successMessage.classList.remove("hidden");
          successMessage.style.color = "green";
        } else {
          alert(result.error || "Something went wrong.");
        }
      } catch (error) {
        alert("Submission failed. Please try again later.");
        console.error("Form error:", error);
      }
    });
  }
});
