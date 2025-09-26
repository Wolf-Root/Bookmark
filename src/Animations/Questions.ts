import { gsap } from "../lib/gsap";

const questionsAnimation = () => {
  // Questions Animation
  const cards = gsap.utils.toArray<HTMLElement>(".question");
  const button = document.querySelector(".questions-button");

  if (!cards.length) return;
  if (!button) return;

  gsap.from(cards, {
    scrollTrigger: {
      trigger: ".questions-item",
      start: "top center",
    },
    opacity: 0,
    x: -150,
    duration: 0.8,
    ease: "power3.out",
    stagger: 0.2,
  });

  gsap.from(button, {
    scrollTrigger: {
      trigger: ".questions-item",
      start: "top center",
    },
    opacity: 0,
    y: 100,
    duration: 1,
    ease: "back.out(1.7)",

    stagger: 0.5,
  });
};

export default questionsAnimation;
