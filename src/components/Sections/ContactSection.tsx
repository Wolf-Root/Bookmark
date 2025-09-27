"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { gsap, useGSAP, SplitText } from "@/lib/gsap";

export default function ContactSection() {
  useGSAP(() => {
    const titlesplit = new SplitText("#Contact h2", { type: "chars" });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#Contact",
          start: "top 80%",
        },
        defaults: {
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        },
      })
      .from("#Contact .subtitle", { yPercent: -140 })
      .from(titlesplit.chars, { yPercent: 40, stagger: 0.04 }, "-=0.4")
      .from(".input", { xPercent: -150 }, "-=0.4")
      .from(".contact-button", { xPercent: 150 }, "<");
  }, []);

  return (
    <Box
      component="section"
      bgcolor="primary.main"
      className="py-10 md:py-20 flex flex-col"
      id="Contact"
    >
      <Container maxWidth="xl" className="flex flex-col gap-10">
        {/* Heading */}
        <Stack
          spacing={1.5}
          color="primary.contrastText"
          className="text-center mb-12 max-w-3xl mx-auto"
        >
          <Typography variant="subtitle1" className="subtitle" component="p" fontWeight={500}>
            35,000+ already joined
          </Typography>

          <Typography variant="h2" lineHeight={1.2}>
            Stay Up-To-Date With What We&apos;re Doing
          </Typography>
        </Stack>

        {/* Contact Us */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          className="w-full max-w-xl flex flex-col mx-auto contact-item"
        >
          {/* Input */}
          <TextField
            label="Enter Your Email Address"
            variant="filled"
            sx={{ bgcolor: "background.default", width: "100%" }}
            className="input"
          />

          {/* Button */}
          <Button
            variant="contained"
            color="error"
            className="w-full md:w-38 contact-button"
            size="small"
          >
            Contact Us
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
