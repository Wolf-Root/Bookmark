"use client";

// React
import { ReactNode } from "react";

// MUI Core Components
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";
import Tooltip from "@mui/material/Tooltip";

// Material UI Icon
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import useScrollTrigger from "@mui/material/useScrollTrigger";

interface Props {
  children?: ReactNode;
  threshold?: number;
}

export default function ScrollToTop({ threshold = 300 }: Props) {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold,
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Zoom in={trigger}>
      <Tooltip title="Scroll to top" enterDelay={600}>
        <Fab
          color="primary"
          onClick={scrollToTop}
          aria-label="Scroll back to top"
          aria-hidden={!trigger}
          sx={{
            position: "fixed",
            bottom: 32,
            right: 32,
            zIndex: 1200,
          }}
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </Tooltip>
    </Zoom>
  );
}
