// Initialize Lenis
const lenis = new Lenis();

// Sync Lenis with ScrollTrigger
lenis.on('scroll', ScrollTrigger.update);

// Use requestAnimationFrame to continuously update both Lenis and ScrollTrigger
function raf(time) {
  lenis.raf(time);
  ScrollTrigger.update(); // ensures ScrollTrigger tracks Lenis
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.from("#logo", {
    scale: 0,
    delay: 1,
    duration: 1,
    ease: "back.out",
  });

  gsap.from("#navbar li", {
    opacity: 0,
    y: -10,
    delay: 0.5,
    stagger: 0.3,
    duration: 1,
    ease: "back.out",
  });

  // gsap.to("#hero", {
  //   scrollTrigger: {
  //     trigger: "#hero",
  //     start: "80% 50%",
  //     end: "bottom 50%",
  //     scrub: true,
  //     // markers: true,
  //   },
  //   scale: 0.5,
  //   rotate: -10,
  //   ease: "none",

  // })

  gsap.from("#about-us h2", {
    scrollTrigger: {
      trigger: "#about-us",
      start: "top 60%",
      end: "20% 60%",
      // markers: true,
    },
    x: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "back.out",
  })
  gsap.from("#about-us p", {
    scrollTrigger: {
      trigger: "#about-us",
      start: "top 50%",
      end: "30% 50%",
      // markers: true,
      scrub: true,
    },
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "back.out",
  })

  gsap.from("#about-logo", {
    scrollTrigger: {
      trigger: "#about-us",
      start: "top 50%",
      end: "20% 50%",
      // markers: true,
      scrub: true,
    },
    y: 100,
    scale: 0.5,
    duration: 2,
    ease: "back.out",
  })

  gsap.from(".all-products img", {
    scrollTrigger: {
      trigger: ".all-products",
      start: "top 50%",
      end: "30% 50%",
      // markers: true,
      scrub: true,
    },
    y: 100,
    opacity: 0,
    duration: 5,
    stagger: 0.5,
    ease: "back.out",
  })

  gsap.from("#amra img", {
    scrollTrigger: {
      trigger: "#amra",
      start: "top 80%",
      end: "30% 80%",
      // markers: true,
      scrub: true,
    },
    y: 100,
    scale: 0,
    duration: 2,
    stagger: 0.3,
    ease: "back.out",
  })

  const navTl = gsap.timeline();

  navTl.to("#navbarNav", {
    left: 0,
    duration: 1,
  });

  navTl.pause();

  const menuBtn = document.querySelector("#navbar-toggler");
  const closeBtn = document.querySelector("#close-btn");
  menuBtn.addEventListener("click", () => {
    navTl.play();
  });

  closeBtn.addEventListener("click", () => {
    navTl.reverse();
  });

});
