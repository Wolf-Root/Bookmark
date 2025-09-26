import { gsap, SplitText } from "../lib/gsap";

type HeroAnimationArgs = {
  title?: HTMLHeadingElement | null;
  subtitle?: HTMLParagraphElement | null;
  button?: HTMLDivElement | null;
  img?: HTMLImageElement | null;
  rectangle?: HTMLDivElement | null;
};

const heroAnimation = ({ title, subtitle, button, img, rectangle }: HeroAnimationArgs) => {
  const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

  tl.to(".hidden-before-anim", {
    opacity: 1,
    visibility: "visible",
    duration: 0,
  });

  // Title Animation (split into chars)
  if (title) {
    const split = new SplitText(title, { type: "words, chars" });
    gsap.set(split.chars, {
      className: "bg-gradient-to-r from-violet-700 to-blue-700 bg-clip-text text-transparent",
    });
    tl.from(split.chars, { opacity: 0, y: 40, duration: 0.8, stagger: 0.04 });
  }

  // Rectangle Animation
  if (rectangle) {
    tl.from(rectangle, { scaleX: 0, transformOrigin: "right center", duration: 1.2 }, "-=0.3");
  }

  // Subtitle Animation
  if (subtitle) {
    tl.from(subtitle, { opacity: 0, y: 25, duration: 0.8 }, "<");
  }

  // Image Animation
  if (img) {
    tl.from(img, { opacity: 0, x: 200, duration: 1.2 }, "-=0.4");
  }

  // Button children animation
  if (button?.children?.length) {
    tl.from(Array.from(button.children), { opacity: 0, x: -200, duration: 1.2, stagger: 0.2 }, "<");
  }
  return tl;
};

export default heroAnimation;
