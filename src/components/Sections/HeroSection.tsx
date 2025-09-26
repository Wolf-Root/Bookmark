"use client";

import { Box, Container, Typography, Button, Stack } from "@mui/material";
import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@/lib/gsap";

import heroAnimation from "@/Animations/Hero";

export default function HeroSection() {
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const subtitleRef = useRef<HTMLParagraphElement | null>(null);
  const buttonRef = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const rectangleRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    heroAnimation({
      title: titleRef.current,
      subtitle: subtitleRef.current,
      button: buttonRef.current,
      img: imgRef.current,
      rectangle: rectangleRef.current,
    });
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
          <Typography
            ref={titleRef}
            variant="h1"
            className="bg-linear-to-r from-violet-700 to-blue-700 bg-clip-text text-transparent"
          >
            A Simple Bookmark Manager
          </Typography>

          <Typography ref={subtitleRef} variant="h6" component="p" color="textSecondary">
            A Clean And Simple interface to organize your favorite websites. Open A New Browser Tab
            And see your sites load instantly. Try it for free.
          </Typography>

          <Stack
            ref={buttonRef}
            spacing={2}
            direction={{ xs: "column", md: "row" }}
            className="justify-center md:justify-start"
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
          <Image
            ref={imgRef}
            src="/imgs/hero.svg"
            alt="Hero Image"
            width={1080}
            height={720}
            className="object-cover"
            priority
          />
        </Box>
      </Container>

      {/* Rounded Rectangle */}
      <Box
        ref={rectangleRef}
        bgcolor="primary.main"
        className="hidden md:block absolute overflow-hidden top-1/2 rounded-l-full right-0 h-48 md:h-48 lg:h-56 xl:h-64 2xl:h-72 w-1/2"
      />
    </Box>
  );
}
