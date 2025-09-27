"use client";

import { Box, Container, Typography, Button, Stack } from "@mui/material";
import Image from "next/image";
import { gsap, SplitText, useGSAP } from "@/lib/gsap";

export default function HeroSection() {
  useGSAP(() => {
    const timeline = gsap.timeline({ defaults: { ease: "power1.inOut" } });

    timeline.set(".hidden-before-anim", {
      opacity: 1,
      visibility: "visible",
    });

    const titleSplit = new SplitText("#Home h1", { type: "words, chars" });
    gsap.set(titleSplit.chars, {
      className: "bg-linear-to-b from-violet-600 to-blue-900 bg-clip-text text-transparent",
    });

    timeline
      .from(titleSplit.chars, { opacity: 0, yPercent: 100, duration: 0.5, stagger: 0.04 })
      .from("#Home .rectangle", { scaleX: 0, transformOrigin: "right center", duration: 1 }, "<20%")
      .from("#Home img", { opacity: 0, xPercent: 100, duration: 1, ease: "power3.out" })
      .from("#Home p", { opacity: 0, yPercent: 25, duration: 0.5 }, "<20%")
      .from(".hero-button > *", { opacity: 0, xPercent: -50, stagger: 0.2, duration: 0.6 }, "<20%");
  });

  return (
    <Box
      component="section"
      className="hidden-before-anim min-h-[calc(100vh-64px)] relative flex items-center overflow-hidden"
      id="Home"
    >
      <Container
        maxWidth="xl"
        className="flex flex-col-reverse md:flex-row items-center md:justify-between gap-10"
      >
        {/* Left Text */}
        <Box className="w-full md:w-1/2 flex flex-col gap-6 text-center md:text-left">
          <Typography variant="h1">A Simple Bookmark Manager</Typography>

          <Typography variant="h6" component="p" color="textSecondary">
            A Clean And Simple interface to organize your favorite websites. Open A New Browser Tab
            And see your sites load instantly. Try it for free.
          </Typography>

          <Stack
            spacing={2}
            direction={{ xs: "column", md: "row" }}
            className="justify-center md:justify-start hero-button"
          >
            <Button
              variant="contained"
              color="primary"
              size="large"
              href="#Chrome"
              aria-label="Get it on Chrome"
            >
              Get it on Chrome
            </Button>

            <Button
              variant="outlined"
              color="primary"
              size="large"
              href="#Firefox"
              aria-label="Get it on Firefox"
            >
              Get it on Firefox
            </Button>
          </Stack>
        </Box>

        {/* Right Image */}
        <Box className="w-full md:w-1/2 z-10 flex-shrink-0">
          <Image src="/imgs/hero.svg" alt="Hero Image" width={1000} height={1000} priority />
        </Box>
      </Container>

      {/* Rounded Rectangle */}
      <Box
        bgcolor="primary.main"
        className="hidden md:block absolute overflow-hidden top-1/2 rounded-l-full right-0 h-48 md:h-48 lg:h-56 xl:h-64 2xl:h-72 w-1/2 rectangle"
      />
    </Box>
  );
}
