"use client";

import { useRef } from "react";
import { gsap, SplitText, useGSAP } from "@/lib/gsap";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

type SectionHeadingProps = {
  title: string;
  subtitle: string;
  direction?: "column" | "column-reverse";
  color?: "primary.contrastText";
};

export default function SectionHeading({ title, subtitle, direction, color }: SectionHeadingProps) {
  const headingRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!headingRef.current) return;

      const h2 = headingRef.current.querySelector("h2");
      const p = headingRef.current.querySelector("p");

      if (!h2 || !p) return;

      const split = new SplitText(h2, { type: "chars" });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top center",
        },
      });

      tl.from(split.chars, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.04,
      }).from(
        p,
        {
          opacity: 0,
          y: 25,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.9"
      );
    },
    { scope: headingRef }
  );

  return (
    <Stack
      ref={headingRef}
      direction={direction}
      spacing={1.5}
      className="text-center mb-12 max-w-3xl mx-auto"
    >
      <Typography variant="h2" component="h2" fontWeight={700} lineHeight={1.2} color={color}>
        {title}
      </Typography>

      <Typography
        variant="subtitle1"
        component="p"
        color={color ? color : "textSecondary"}
        fontWeight={500}
      >
        {subtitle}
      </Typography>
    </Stack>
  );
}
