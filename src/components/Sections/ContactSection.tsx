"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SectionHeading from "../SectionHeading";
import { useGSAP } from "@gsap/react";
import contactAnimation from "@/app/Animations/Contact";

export default function ContactSection() {
  useGSAP(() => {
    contactAnimation();
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
        <SectionHeading
          title="Stay Up-To-Date With What We're Doing"
          subtitle="35,000+ already joined"
          direction="column-reverse"
          color="primary.contrastText"
        />

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
