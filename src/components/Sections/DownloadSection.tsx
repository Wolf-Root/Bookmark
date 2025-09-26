"use client";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Image from "next/image";

import { useGSAP } from "@gsap/react";
import downloadAnimation from "@/Animations/Download";
import SectionHeading from "../SectionHeading";

const Cards: { img: string; name: string }[] = [
  {
    img: "/imgs/logo-chrome.svg",
    name: "Chrome",
  },
  {
    img: "/imgs/logo-firefox.svg",
    name: "Firefox",
  },
  {
    img: "/imgs/logo-opera.svg",
    name: "Opera",
  },
];

export default function DownloadSection() {
  useGSAP(() => {
    downloadAnimation();
  }, []);

  return (
    <Box component="section" className="py-10 md:py-20 flex flex-col" id="Download">
      <Container maxWidth="xl" className="flex flex-col gap-10">
        {/* Heading */}
        <SectionHeading
          title="Download the Extension"
          subtitle="we've got more browers in the pipeline.
            Please do let us know if you've got a Favourite you'd like us to prioritize"
        />

        {/* Browers Cards */}
        <Grid container spacing={{ xs: 4, sm: 8 }} className="downloads-grid">
          {Cards.map(({ img, name }, index) => (
            <Grid
              key={index}
              size={{ xs: 12, sm: 6, md: 4 }}
              className="flex justify-center download-card"
            >
              <Card id={name} className="min-w-full pt-5 flex flex-col items-center">
                <CardContent className="flex flex-col items-center gap-5 w-full border-b-1 border-divider">
                  <Image src={img} alt={name} width={102} height={100} loading="lazy" />

                  <Typography variant="h5" component="h3">
                    Add To {name}
                  </Typography>

                  <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
                    Minimun Version 62
                  </Typography>
                </CardContent>

                <CardActions className="my-2">
                  <Button size="large" variant="contained" className="w-full">
                    Add & Install Extension
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
