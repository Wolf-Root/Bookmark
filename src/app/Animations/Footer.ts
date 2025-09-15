import { RefObject } from "react";
import { gsap } from "../lib/gsap";

const footerAnimation = ({ footerRef }: { footerRef: RefObject<HTMLDivElement | null> }) => {
  // Footer Animation

  if (!footerRef.current) return;

  const logo = footerRef.current.querySelector(".footer-logo");
  const nav = footerRef.current.querySelectorAll(".footer-nav a");
  const socials = footerRef.current.querySelectorAll(".footer-social a");
  const copyright = footerRef.current.querySelector(".footer-copy");

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: footerRef.current,
      start: "top 90%",
      toggleActions: "play none none reverse",
    },
  });

  // Row 1
  tl.from(logo, {
    x: -50,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out",
  });

  tl.from(
    nav,
    {
      y: 30,
      opacity: 0,
      duration: 0.6,
      stagger: 0.15,
      ease: "power3.out",
    },
    "-=0.5"
  );

  tl.from(
    socials,
    {
      x: 50,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "back.out(1.7)",
    },
    "-=0.4"
  );

  // Row 2
  tl.from(
    copyright,
    {
      opacity: 0,
      y: 20,
      duration: 0.8,
      ease: "power2.out",
    },
    "+=0.3"
  );
};

export default footerAnimation;
