// script.js

// 1. Typing effect for header subtitle
const subtitle = document.querySelector("header p");
const text = subtitle.textContent;
subtitle.textContent = "";
let index = 0;

function typeWriter() {
  if (index < text.length) {
    subtitle.textContent += text.charAt(index);
    index++;
    setTimeout(typeWriter, 50);
  }
}
document.addEventListener("DOMContentLoaded", typeWriter);

// 2. Reveal sections on scroll
const cards = document.querySelectorAll(".card");

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;

  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < triggerBottom) {
      card.classList.add("visible");
    } else {
      card.classList.remove("visible");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
document.addEventListener("DOMContentLoaded", revealOnScroll);

// 3. Time-based greeting in footer
const footer = document.querySelector("footer p");
const currentHour = new Date().getHours();
let greeting;

if (currentHour < 12) greeting = "Good morning ☀️";
else if (currentHour < 18) greeting = "Good afternoon 🌤️";
else greeting = "Good evening 🌙";

footer.textContent = `© 2025 Haneen Magdy. All Rights Reserved. — ${greeting}`;

// 4. Hover effect for social icons (pulse animation)
const socialIcons = document.querySelectorAll(".social-icons a");
socialIcons.forEach(icon => {
  icon.addEventListener("mouseenter", () => {
    icon.style.transform = "scale(1.3)";
    icon.style.transition = "transform 0.3s";
  });
  icon.addEventListener("mouseleave", () => {
    icon.style.transform = "scale(1)";
  });
});

// 5. Optional: Smooth scroll to top on clicking name
document.querySelector("header h1").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
