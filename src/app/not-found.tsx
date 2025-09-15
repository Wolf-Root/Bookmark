import Container from "@mui/material/Container";
import MuiLink from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return (
    <Container
      maxWidth="lg"
      component="section"
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        gap: 2,
      }}
    >
      <Typography
        variant="h1"
        sx={{ fontSize: { xs: "5rem", md: "10rem" }, mb: 5 }}
        color="primary"
      >
        404
      </Typography>

      <Typography variant="h2" color="initial">
        Wait, where are you?
      </Typography>

      <Typography component="h3" variant="h5" color="textSecondary">
        Oops! We can&apos;t seem to find the page you&apos;re looking for. Head{" "}
        <MuiLink component={Link} href="/" aria-label="Go To Home" underline="hover">
          Home.
        </MuiLink>
      </Typography>
    </Container>
  );
}
