"use client";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Image from "next/image";

import { useGSAP } from "@gsap/react";
import featuresAnimation from "@/Animations/Features";
import SectionHeading from "../SectionHeading";

const Features: { img: string; title: string; subtitle: string }[] = [
  {
    img: "/imgs/feature1.svg",
    title: "Bookmarks in one click",
    subtitle:
      "Organize your bookmarks however you like. Our Simple drag-and-drop interface Gives you complete control over how you manage your favourite sites",
  },
  {
    img: "/imgs/feature2.svg",
    title: "Intelligent search",
    subtitle:
      "Our Powerful search feature will help you find saved sites in on time at all. No need to trawl through all your bookmarks.",
  },
  {
    img: "/imgs/feature3.svg",
    title: "Share your Bookmarks",
    subtitle:
      "Easily share your Bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
  },
];

export default function FeaturesSection() {
  useGSAP(() => {
    featuresAnimation();
  }, []);

  return (
    <Box
      component="section"
      bgcolor="background.paper"
      className="min-h-screen py-10 md:py-20 flex flex-col gap-10"
      id="Features"
    >
      {/* Heading */}
      <Container maxWidth="xl">
        {/* Heading */}
        <SectionHeading
          title="Features"
          subtitle="Our Aim is To Make it Quick And Easy For You To Access Your Favourite websites. 
          Your Bookmarks sync between your Devices So You Can Access Them On The Go."
        />
      </Container>

      {/* Features */}
      <Box className="flex flex-col justify-between gap-20">
        {Features.map(({ img, title, subtitle }, index) => (
          <Box key={index} className="feature-item relative">
            <Container
              maxWidth="xl"
              className={`flex flex-col items-center justify-between gap-10 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <Box
                className={`feature-image w-full md:w-1/2 z-10 flex-shrink-0 flex ${
                  index % 2 !== 0 ? "md:justify-end" : ""
                }`}
              >
                <Image
                  src={img}
                  alt={`Feature ${index}`}
                  width={600}
                  height={400}
                  className="object-cover"
                  loading="lazy"
                />
              </Box>

              <Box className="feature-text w-full md:w-1/2 flex flex-col gap-5 text-center md:text-left">
                <Typography variant="h3">{title}</Typography>
                <Typography variant="h6" component="p" color="textSecondary">
                  {subtitle}
                </Typography>
                <Stack spacing={2} direction="row" className="justify-center md:justify-start">
                  <Button variant="contained" color="primary" size="large">
                    More Info
                  </Button>
                </Stack>
              </Box>
            </Container>

            <Box
              bgcolor="primary.main"
              className={`feature-deco hidden md:block absolute overflow-hidden top-1/2 ${
                index % 2 === 0 ? "rounded-r-full left-0" : "rounded-l-full right-0"
              } h-48 lg:h-56 xl:h-64 2xl:h-72 w-1/2`}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
}
