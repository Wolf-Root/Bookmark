"use client";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

import Image from "next/image";

import { gsap, useGSAP, SplitText } from "@/lib/gsap";
import { Cards } from "@/constants";

export default function DownloadSection() {
  useGSAP(() => {
    // Heading
    const titlesplit = new SplitText("#Download h2", { type: "chars" });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#Download",
          start: "top center",
        },
        defaults: {
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        },
      })
      .from(titlesplit.chars, { yPercent: 40, stagger: 0.04 })
      .from("#Download .subtitle", { yPercent: 25 }, "-=0.5");

    // Cards
    const isMobile = window.innerWidth < 768;

    const cards = gsap.utils.toArray<HTMLElement>(".download-card");

    gsap.from(cards, {
      scrollTrigger: {
        trigger: ".downloads-grid",
        start: "top center",
      },
      opacity: 0,
      xPercent: isMobile ? 50 : 0,
      yPercent: isMobile ? 0 : 50,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.2,
    });
  }, []);

  return (
    <Box component="section" className="py-10 md:py-20 flex flex-col" id="Download">
      <Container maxWidth="xl" className="flex flex-col gap-10">
        {/* Heading */}
        <Stack spacing={1.5} className="text-center mb-12 max-w-3xl mx-auto">
          <Typography variant="h2" lineHeight={1.2}>
            Download the Extension
          </Typography>

          <Typography
            variant="subtitle1"
            component="p"
            className="subtitle"
            color="textSecondary"
            fontWeight={500}
          >
            we&apos; ve got more browers in the pipeline. Please do let us know if you&apos;ve got a
            Favourite you&apos;d like us to prioritize
          </Typography>
        </Stack>

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
