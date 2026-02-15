{
  // Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const mainNav = document.getElementById("mainNav");

  mobileMenuBtn.addEventListener("click", () => {
    mainNav.classList.toggle("active");
    const icon = mobileMenuBtn.querySelector("i");
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-times");
  });

  // Close mobile menu when clicking a link
  document.querySelectorAll("nav a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("active");
      const icon = mobileMenuBtn.querySelector("i");
      icon.classList.remove("fa-times");
      icon.classList.add("fa-bars");
    });
  });

  // Smooth Scrolling
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        });
      }
    });
  });

  // Contact Form Submission
  const contactForm = document.getElementById("contactForm");
  const formConfirmation = document.getElementById("formConfirmation");

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    formConfirmation.classList.add("show");
    contactForm.reset();

    setTimeout(() => {
      formConfirmation.classList.remove("show");
    }, 5000);
  });

  // Scroll to Top Button
  const scrollTopBtn = document.getElementById("scrollTop");

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
      scrollTopBtn.classList.add("visible");
    } else {
      scrollTopBtn.classList.remove("visible");
    }
  });

  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Animate Skill Bars
  function animateSkillBars() {
    const skillBars = document.querySelectorAll(".skill-level");
    skillBars.forEach((bar) => {
      const level = bar.getAttribute("data-level");
      bar.style.width = level + "%";
    });
  }

  // Fade-in Animation on Scroll
  function checkFadeIn() {
    const fadeElements = document.querySelectorAll(".fade-in");
    fadeElements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (elementTop < windowHeight - 100) {
        element.classList.add("visible");
        if (element.classList.contains("skills-container")) {
          setTimeout(animateSkillBars, 400);
        }
      }
    });
  }

  window.addEventListener("scroll", checkFadeIn);
  window.addEventListener("load", checkFadeIn);
  setTimeout(checkFadeIn, 200);
}
