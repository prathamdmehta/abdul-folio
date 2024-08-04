// ---
const hamMenuBtn = document.querySelector(".header__main-ham-menu-cont");
const smallMenu = document.querySelector(".header__sm-menu");
const headerHamMenuBtn = document.querySelector(".header__main-ham-menu");
const headerHamMenuCloseBtn = document.querySelector(
  ".header__main-ham-menu-close"
);
const headerSmallMenuLinks = document.querySelectorAll(".header__sm-menu-link");

hamMenuBtn.addEventListener("click", () => {
  if (smallMenu.classList.contains("header__sm-menu--active")) {
    smallMenu.classList.remove("header__sm-menu--active");
  } else {
    smallMenu.classList.add("header__sm-menu--active");
  }
  if (headerHamMenuBtn.classList.contains("d-none")) {
    headerHamMenuBtn.classList.remove("d-none");
    headerHamMenuCloseBtn.classList.add("d-none");
  } else {
    headerHamMenuBtn.classList.add("d-none");
    headerHamMenuCloseBtn.classList.remove("d-none");
  }
});

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
  headerSmallMenuLinks[i].addEventListener("click", () => {
    smallMenu.classList.remove("header__sm-menu--active");
    headerHamMenuBtn.classList.remove("d-none");
    headerHamMenuCloseBtn.classList.add("d-none");
  });
}

// ---
const headerLogoConatiner = document.querySelector(".header__logo-container");

headerLogoConatiner.addEventListener("click", () => {
  location.href = "index.html";
});

document.addEventListener("DOMContentLoaded", () => {
  gsap.from(".home-hero__content", {
    duration: 1,
    opacity: 0,
    y: -50,
    ease: "power2.out",
  });
  gsap.from(".home-hero__social", {
    duration: 0.8,
    opacity: 0,
    y: 20,
    stagger: 0.2,
    delay: 0.5,
    ease: "power2.out",
  });
  gsap.from(".home-hero__mouse-scroll-cont .mouse", {
    duration: 1,
    opacity: 0,
    y: 10,
    delay: 1,
    ease: "power2.out",
  });
  gsap.from(".home-hero__cta", {
    duration: 1,
    scale: 0,
    ease: "bounce.out",
    delay: 1,
  });
});

// header section gsap
document.addEventListener("DOMContentLoaded", () => {
  gsap.from(".header__logo-sub", { duration: 1, opacity: 0, y: -50, ease: "power2.out" });
  gsap.from(".header__link", { 
    duration: 0.8, 
    opacity: 0, 
    y: -50, 
    stagger: 0.2, 
    ease: "power2.out" 
  });
});

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  // Animation for the "About Me" section content
  gsap.from(".about__content-main", {
    duration: 1,
    opacity: 0,
    y: 50,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".about__content-main",
      start: "top 80%",
      toggleActions: "play none none none",
    }
  });
  gsap.from(".about__content-skills", {
    duration: 1,
    opacity: 0,
    y: 50,
    delay: 0.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".about__content-skills",
      start: "top 80%",
      toggleActions: "play none none none",
    }
  });

  // Staggered animation for the skills
  gsap.from(".skills__skill", {
    duration: 0.6,
    opacity: 0,
    y: 20,
    stagger: 0.3,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".skills",
      start: "top 80%",
      toggleActions: "play none none none",
    }
  });
});

document.addEventListener("DOMContentLoaded", function() {
  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray(".projects__row").forEach((row, index) => {
    gsap.from(row, {
      scrollTrigger: {
        trigger: row,
        start: "top 80%", // Adjust as needed
        toggleActions: "play none none reverse",
      },
      opacity: 0,
      y: 50,
      duration: 1,
      delay: index * 0.3 // Stagger animation start
    });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  gsap.registerPlugin(ScrollTrigger);

  // Animate the heading
  gsap.from(".heading-sec__main, .heading-sec__sub", {
    scrollTrigger: {
      trigger: ".heading-sec__main",
      start: "top 80%", // Adjust as needed
      toggleActions: "play none none reverse",
    },
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.3
  });

  // Animate each form field
  gsap.from(".contact__form-field", {
    scrollTrigger: {
      trigger: ".contact__form",
      start: "top 80%", // Adjust as needed
      toggleActions: "play none none reverse",
    },
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.3
  });

  // Animate the submit button
  gsap.from(".contact__btn", {
    scrollTrigger: {
      trigger: ".contact__form",
      start: "top 80%", // Adjust as needed
      toggleActions: "play none none reverse",
    },
    opacity: 0,
    scale: 0.8,
    duration: 1,
    delay: 1 // Delay to animate after form fields
  });
});

document.addEventListener("DOMContentLoaded", function() {
  gsap.registerPlugin(ScrollTrigger);

  // Animate the footer social icons
  gsap.from(".main-footer__social-cont a", {
    scrollTrigger: {
      trigger: ".main-footer__social-cont",
      start: "top 90%", // Adjust as needed
      toggleActions: "play none none reverse",
    },
    opacity: 0,
    y: 30,
    duration: 1,
    stagger: 0.2
  });

  // Animate the footer text elements
  gsap.from(".main-footer__heading-sm, .main-footer__short-desc, .main-footer__lower", {
    scrollTrigger: {
      trigger: ".main-footer__upper",
      start: "top 90%", // Adjust as needed
      toggleActions: "play none none reverse",
    },
    opacity: 0,
    y: 30,
    duration: 1,
    stagger: 0.3
  });
});
