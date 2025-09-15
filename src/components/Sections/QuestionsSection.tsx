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
import SectionHeading from "../SectionHeading";
import questionsAnimation from "@/app/Animations/Questions";
import { useGSAP } from "@gsap/react";

const Questions: { title: string; disc: string }[] = [
  {
    title: "What is a Bookmark?",
    disc: "A bookmark is a saved link to a webpage that allows you to quickly access it later without searching again.",
  },
  {
    title: "How Can I request a new browser?",
    disc: "You can request a new browser by downloading and installing it from its official website.",
  },

  {
    title: "Is there a mobile app?",
    disc: "Yes! Many browsers have mobile apps available for iOS and Android.",
  },

  {
    title: "What about other Cheomium browers?",
    disc: "Chromium-based browsers, like Brave, Edge, Opera, and Vivaldi, offer unique features while using the same engine as Chrome for fast and secure browsing.",
  },
];

export default function QuestionsSection() {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => (event: SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  useGSAP(() => {
    questionsAnimation();
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
        <SectionHeading
          title="Frequently Asked Questions"
          subtitle="Here are some of our FAQs. if you have any other Questions you'd like answwered
            Please feel free to email us."
        />

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
