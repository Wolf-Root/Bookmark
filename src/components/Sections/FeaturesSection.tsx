"use client";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Image from "next/image";

import { gsap, useGSAP, SplitText } from "@/lib/gsap";
import { Features } from "@/constants";

export default function FeaturesSection() {
  useGSAP(() => {
    // Heading
    const titlesplit = new SplitText("#Features h2", { type: "chars" });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#Features",
          start: "top center",
        },
        defaults: {
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        },
      })
      .from(titlesplit.chars, { yPercent: 40, stagger: 0.04 })
      .from("#Features .subtitle", { yPercent: 25 }, "-=0.5")

    // Features
    gsap.utils.toArray<HTMLElement>(".feature-item").forEach((item, i) => {
      const image = item.querySelector(".feature-image");
      const text = item.querySelectorAll(".feature-text > *");
      const deco = item.querySelector(".feature-deco");

      const featureTl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: "top center",
        },
        defaults: {
          ease: "power3.out",
          opacity: 0,
        },
      });

      featureTl
        .from(image, { x: i % 2 === 0 ? -100 : 100, duration: 1 })
        .from(text, { yPercent: 40, duration: 1, stagger: 0.2 }, "-=0.8")
        .from(
          deco,
          {
            scaleX: 0,
            transformOrigin: i % 2 === 0 ? "left center" : "right center",
            duration: 0.5,
          },
          "-=0.8"
        );
    });
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
        <Stack spacing={1.5} className="text-center mb-12 max-w-3xl mx-auto">
          <Typography variant="h2" lineHeight={1.2}>
            Features
          </Typography>

          <Typography
            variant="subtitle1"
            className="subtitle"
            component="p"
            color="textSecondary"
            fontWeight={500}
          >
            Our Aim is To Make it Quick And Easy For You To Access Your Favourite websites. Your
            Bookmarks sync between your Devices So You Can Access Them On The Go.
          </Typography>
        </Stack>
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
