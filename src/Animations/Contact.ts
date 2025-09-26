import { gsap } from "../lib/gsap";

const contactAnimation = () => {
  const input = gsap.utils.toArray<HTMLElement>(".input");
  const button = document.querySelector(".contact-button");

  if (!input.length) return;
  if (!button) return;

  gsap.from(input, {
    scrollTrigger: {
      trigger: ".contact-item",
      start: "top 80%",
    },
    opacity: 0,
    x: -150,
    duration: 0.8,
    ease: "power3.out",
    stagger: 0.2,
  });

  gsap.from(button, {
    scrollTrigger: {
      trigger: ".contact-item",
      start: "top 80%",
    },
    opacity: 0,
    x: 150,
    duration: 1,
    ease: "power3.out",
    stagger: 0.5,
  });
};

export default contactAnimation;
