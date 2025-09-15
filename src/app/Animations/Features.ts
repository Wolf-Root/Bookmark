import { gsap } from "../lib/gsap";

const featuresAnimation = () => {
  // Features Animation
  gsap.utils.toArray<HTMLElement>(".feature-item").forEach((item, i) => {
    const image = item.querySelector(".feature-image");
    const text = item.querySelectorAll(".feature-text > *");
    const deco = item.querySelector(".feature-deco");

    const featureTl = gsap.timeline({
      scrollTrigger: {
        trigger: item,
        start: "top center",
        toggleActions: "play reverse play reverse",
      },
    });

    featureTl
      .from(image, {
        x: i % 2 === 0 ? -100 : 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      })
      .from(
        text,
        {
          y: 40,
          opacity: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
        },
        "-=0.8"
      );

    if (deco) {
      featureTl.from(
        deco,
        {
          scaleX: 0,
          transformOrigin: i % 2 === 0 ? "left center" : "right center",
          duration: 0.5,
          ease: "power3.out",
        },
        "-=0.8"
      );
    }
  });
};

export default featuresAnimation;
