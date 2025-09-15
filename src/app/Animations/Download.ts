import { gsap } from "../lib/gsap";

const downloadAnimation = () => {
  const isMobile = window.innerWidth < 768;

  // Cards Animation
  const cards = gsap.utils.toArray<HTMLElement>(".download-card");

  if (!cards.length) return;

  gsap.from(cards, {
    scrollTrigger: {
      trigger: ".downloads-grid",
      start: "top center",
      toggleActions: "play reverse play reverse",
    },
    opacity: 0,
    x: isMobile ? 50 : 0,
    y: isMobile ? 0 : 50,
    duration: 0.8,
    ease: "power3.out",
    stagger: 0.2,
  });
};

export default downloadAnimation;
