"use client";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { SyntheticEvent, useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionDetails from "@mui/material/AccordionDetails";
import Button from "@mui/material/Button";
import { gsap, useGSAP, SplitText } from "@/lib/gsap";
import { Questions } from "@/constants";
import Stack from "@mui/material/Stack";

export default function QuestionsSection() {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => (event: SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  useGSAP(() => {
    // Heading
    const titlesplit = new SplitText("#FAQs h2", { type: "chars" });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#FAQs",
          start: "top center",
        },
        defaults: {
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        },
      })
      .from(titlesplit.chars, { yPercent: 40, stagger: 0.04 })
      .from("#FAQs .subtitle", { yPercent: 25 }, "-=0.5");

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".questions-item",
          start: "top center",
        },
        defaults: { opacity: 0 },
      })
      .from(".question", {
        xPercent: -150,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.2,
      })
      .from(".questions-button", {
        yPercent: 100,
        duration: 1,
        ease: "back.out(1.7)",
      });
  }, []);

  return (
    <Box
      component="section"
      bgcolor="background.paper"
      className="py-10 md:py-20 flex flex-col"
      id="FAQs"
    >
      <Container maxWidth="xl" className="flex flex-col gap-10">
        {/* Heading */}
        <Stack spacing={1.5} className="text-center mb-12 max-w-3xl mx-auto">
          <Typography variant="h2" lineHeight={1.2}>
            Frequently Asked Questions
          </Typography>

          <Typography
            variant="subtitle1"
            className="subtitle"
            component="p"
            color="textSecondary"
            fontWeight={500}
          >
            Here are some of our FAQs. if you have any other Questions you&apos;d like answwered
            Please feel free to email us.
          </Typography>
        </Stack>

        {/* Questions */}
        <Box className="w-full max-w-xl flex flex-col mx-auto questions-item">
          {Questions.map(({ title, disc }, index) => (
            <Accordion
              key={index}
              expanded={expanded === `panel${index + 1}`}
              onChange={handleChange(`panel${index + 1}`)}
              elevation={0}
              className="border-b-1 border-b-divider !rounded-none question"
              disableGutters
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon color="primary" />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography component="span">{title}</Typography>
              </AccordionSummary>

              <AccordionDetails>
                <Typography color="textSecondary">{disc}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>

        {/* Button */}
        <Box className="w-fit mx-auto questions-button">
          <Button variant="contained" color="primary">
            More Info
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
