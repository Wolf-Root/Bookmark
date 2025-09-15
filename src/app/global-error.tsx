"use client";

import Typography from "@mui/material/Typography";
import Link from "next/link";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <Container
      maxWidth="lg"
      aria-live="assertive"
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
        sx={{ fontSize: { xs: "3rem", md: "5rem", lg: "10rem" }, mb: 2 }}
        color="error"
      >
        {error.name} :(
      </Typography>

      <Typography variant="h3" component="h2" color="initial">
        {error.message}
      </Typography>

      {error.digest && (
        <Typography variant="body2" color="textSecondary" sx={{ mt: 2 }}>
          Digest: {error.digest}
        </Typography>
      )}

      <Typography component="h3" variant="h4" color="textSecondary">
        Something went wrong!
      </Typography>

      <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mt: 3 }}>
        <Button component={Link} href="/" variant="contained" aria-label="Go To Home">
          Go Home
        </Button>

        <Button variant="outlined" onClick={reset} aria-label="Try Again">
          Try again
        </Button>
      </Stack>
    </Container>
  );
}
